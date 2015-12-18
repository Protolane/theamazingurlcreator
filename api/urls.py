from django.conf.urls import include, url
from api import views
apipattern = [
    url(r'urls$', views.url),
    url(r'urls/(?P<id>.*)$', views.url),
]