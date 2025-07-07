import strawberry
from typing import List
from strawberry import auto
from strawberry.django import type
from .models import User

@strawberry.django.type(User)
class UserType:
    id: auto
    username: auto
    email: auto

@strawberry.type
class Query:
    @strawberry.field
    def users(self) -> List[UserType]:
        return User.objects.all()

@strawberry.type
class Mutation:
    @strawberry.mutation
    def create_user(self, username: str, email: str) -> UserType:
        return User.objects.create(username=username, email=email)
    
    @strawberry.mutation
    def update_user(self, id: int, username: str = None, email: str = None) -> UserType:
        user = User.objects.get(id=id)
        if username is not None:
            user.username = username
        if email is not None:
            user.email = email
        user.save()
        return user

    @strawberry.mutation
    def delete_user(self, id: int) -> bool:
        user = User.objects.get(id=id)
        user.delete()
        return True
