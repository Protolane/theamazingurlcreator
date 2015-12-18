from django.shortcuts import render
from urls.models import SentenceURL
from django.http.response import HttpResponseRedirect

# Create your views here.

def index(request):
    return render(request, 'index/index.html')

def redirecter(request, identifier):
    return render(request, 'index/redirecter.html', {'identifier':identifier})

def error404(request):
    return render(request, 'index/404.html')

def favicon(request):
    return HttpResponseRedirect('/static/images/favicon.ico')