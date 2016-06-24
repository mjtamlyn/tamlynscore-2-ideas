import os

import dj_database_url


BASE_DIR = os.path.dirname(os.path.dirname(__file__))

SECRET_KEY = os.environ.get('SECRET_KEY', 'r50(zwnsd8lhi#t(wfetq@n@1(#o2yp=&b)z=c@e)e!00zvhmc')

DEBUG = not os.environ.get('PRODUCTION')
TEMPLATE_DEBUG = DEBUG

ALLOWED_HOSTS = [
    'tamlynscore.herokuapp.com',
    'localhost',
    '127.0.0.1',
    '192.168.1.100',
]

INSTALLED_APPS = (
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)
MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    # 'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'tamlynscore.urls'
WSGI_APPLICATION = 'tamlynscore.wsgi.application'

DATABASES = {'default': dj_database_url.config(default='postgres://localhost/tamlynscore')}

LANGUAGE_CODE = 'en-gb'
TIME_ZONE = 'Europe/London'
USE_I18N = True
USE_L10N = True
USE_TZ = True

STATIC_URL = '/static/'
