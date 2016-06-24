import graphene


class Root(graphene.ObjectType):
    ok = graphene.Boolean(default=True)


class Query(graphene.ObjectType):
    root = graphene.Field(Root, default=Root())


schema = graphene.Schema(name='TamlynScore')
schema.query = Query
