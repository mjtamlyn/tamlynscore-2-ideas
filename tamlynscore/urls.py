from django.conf.urls import include, url
from django.views.decorators.csrf import csrf_exempt

from graphene.contrib.django.views import GraphQLView

from api.schema import schema


urlpatterns = [
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^graphql', csrf_exempt(GraphQLView.as_view(schema=schema))),
    url(r'^graphiql', include('django_graphiql.urls')),
]
