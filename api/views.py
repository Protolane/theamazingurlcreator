from django.http.response import HttpResponse

from urls.models import URL, SentenceURL, ShortURL, RegularRandomURL,\
    VeryLongURL

import requests, http, json
from datetime import datetime
import traceback
from django.core import serializers

# Create your views here.

def check_target(target):
    if target.startswith('http://localhost') or target.startswith('https://localhost') \
            or target.startswith('http://tauc.link') or target.startswith('https://tauc.link'):
        return False
    else:
        try:
            r = requests.head(target, timeout=5)
            return r.status_code == http.client.OK or http.client.NOT_MODIFIED or http.client.FOUND
        except:
            return False

def url(request, id=None):
    if request.method == 'POST':
        json_data = json.loads(request.body.decode('utf-8'))
        
        target = json_data['target']
        url_type = int(json_data['type'])
        
        if check_target(target):
            
            def make_n_save(s, make_id=True):
                try:
                    if make_id:
                        s.make_id()
                    s.target = target
                    s.createDate = str(datetime.now())
                    s.save()
                    return HttpResponse(status=http.client.CREATED, content=s.to_JSON(), content_type='application/json')
                except:
                    print(traceback.format_exc())
            
            if url_type == 0: # sentence
                s = SentenceURL.objects.filter(target=None)
                if (len(s) == 0):
                    return HttpResponse(status=http.client.INSUFFICIENT_STORAGE, content='{"error": No more available URLs, please contact the website owner"}', content_type='application/json')
                
                return make_n_save(s[0], False)
            
            elif url_type == 1: # short url
                s = ShortURL()
                return make_n_save(s)
            
            elif url_type == 2: # regular
                s = RegularRandomURL()
                return make_n_save(s)
            
            elif url_type == 3: # very long
                s = VeryLongURL()
                return make_n_save(s)
                                
            else:
                return HttpResponse(status=http.client.BAD_REQUEST, content='{"error": "Unknown type ' + str(url_type) + '"}', content_type='application/json')
        else:
            return HttpResponse(status=http.client.NOT_ACCEPTABLE, content='{"error": "Target did not pass URL verification"}', content_type='application/json')
    elif request.method == 'GET':
        if id == None:
            short_urls = ShortURL.objects.all().order_by('createDate')[:10]
            random_urls = RegularRandomURL.objects.all().order_by('createDate')[:10]
            verylong_urls = VeryLongURL.objects.all().order_by('createDate')[10:]
            sentence_urls = SentenceURL.objects.exclude(target=None).order_by('createDate')[:10]
            
            all_urls = list(short_urls) + list(random_urls) + list(verylong_urls) + list(sentence_urls)
            all_urls = all_urls[:12]
            
            return HttpResponse(status=http.client.OK, content=serializers.serialize('json', all_urls), content_type='application/json')
        else:
            try:
                def add_view(obj):
                    s.views = (s.views if s.views != None else 0) + 1
                    s.save()
                    return HttpResponse(status=http.client.OK, content=s.to_JSON(), content_type='application/json')
                
                try:
                    s = SentenceURL.objects.get(identifier=id)
                    return add_view(s)
                    
                except SentenceURL.DoesNotExist:
                    try:
                        s = ShortURL.objects.get(identifier=id)
                        return add_view(s)
                    except ShortURL.DoesNotExist:
                        try:
                            s = RegularRandomURL.objects.get(identifier=id)
                            return add_view(s)
                        except RegularRandomURL.DoesNotExist:
                            try: 
                                s = VeryLongURL.objects.get(identifier=id)
                                return add_view(s)
                            except VeryLongURL.DoesNotExist:
                                return HttpResponse(status=http.client.NOT_FOUND)
            except:
                print(traceback.format_exc())
            
    else:
        return HttpResponse(status=http.client.METHOD_NOT_ALLOWED)

