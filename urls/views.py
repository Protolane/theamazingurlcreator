from django.shortcuts import render
from urls.models import SentenceURL

import requests, traceback

# Create your views here.
def populate_sentences():
    
    def sanitize(text):
        return (text.replace(' ', '-').replace('.', '').replace('!', '').replace('?', '').replace(',', '').replace("'", '').lower())
        
    def make_sentence():
        try:
            return (sanitize(requests.post('http://watchout4snakes.com/wo4snakes/Random/NewRandomSentence', timeout=10).text))
        except:
            return (None)
    
    while(SentenceURL.objects.all().count() < 10000):
        sentence = make_sentence()
        if sentence != None:
            m = SentenceURL()
            m.sentence = sentence
            try:
                m.save()
                print('(S) "' + sentence + '" saved. Total: ' + str(SentenceURL.objects.all().count()))
            except:
                print('(F) "' + sentence + '" not saved. Probably repeated.')
                traceback.print_exc()
        else:
            print('(F) Request timed-out.')
            
