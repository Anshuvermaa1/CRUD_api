import strawberry
from users.schema import Query, Mutation

schema = strawberry.Schema(query=Query, mutation=Mutation)