import graphene


class Root(graphene.ObjectType):
    hello = graphene.String(default='world')


class Query(graphene.ObjectType):
    root = graphene.Field(Root, default=Root())


schema = graphene.Schema(name='TamlynScore')
schema.query = Query
