from django.conf.urls import include, url
from django.contrib import admin

from page import views as page
from api import urls as api_urls

urlpatterns = [
    url(r'favicon.ico$', page.favicon),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(api_urls.apipattern)),
    url(r'^error/404$', page.error404),
    url(r'^$', page.index),
    url(r'^(?P<identifier>.*)$', page.redirecter),
]
