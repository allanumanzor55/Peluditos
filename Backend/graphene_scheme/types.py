import graphene
from graphene_django import DjangoObjectType
from backend_app.models import Module,Role,Permissions

class ModuleType(DjangoObjectType):
    class Meta:
        model = Module

class RoleType(DjangoObjectType):
    class Meta:
        model = Role

class PermissionsType(DjangoObjectType):
    class Meta:
        model = Permissions
class Query(graphene.ObjectType):
    all_roles = graphene.List(RoleType)
    all_modules = graphene.List(ModuleType)
    permissions = graphene.Field(PermissionsType,role=graphene.Int())
    def resolve_all_roles(self,info,**kwargs):
        return Role.objects.all()
    
    def resolve_all_modules(self,info,**kwargs):
        return Module.objects.all()
    
    def resolve_permissions_role(self,info,**kwargs):
        role = kwargs.get('role')
        if role is not None:
            return Module.objects.select_related('role','module').get(role__contains=role)