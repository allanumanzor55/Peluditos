import graphene
from graphene import relay
from graphene_django import DjangoObjectType
from backend_app.models import Module,Role,Permissions,ProfileType,Address,User

class AddressNode(DjangoObjectType):
    class Meta:
        model=Address

class ModuleNode(DjangoObjectType):
    
    class Meta:
        model = Module

class RoleNode(DjangoObjectType):
    
    class Meta:
        model = Role

class ProfileTypeNode(DjangoObjectType):

    class Meta:
        model = ProfileType

class PermissionsNode(DjangoObjectType):

    class Meta:
        model = Permissions
        interface = (relay.Node,)
        fields = ('role','module','create','read','update','delete')

class UserNode(DjangoObjectType):
    class Meta:
        model = User

"""
    La clase "Query" definida es la que realizara todo tipo de consultas por cada
    atributo creado se creara un "resolve" que es un metodo que definira la consulta

"""
class Query(graphene.ObjectType):
    all_roles = graphene.List(RoleNode)
    all_modules = graphene.List(ModuleNode)
    all_profileTypes = graphene.List(ProfileTypeNode)
    user = graphene.Field(UserNode,id=graphene.Int())
    all_users = graphene.List(UserNode)
    permissions = graphene.List(PermissionsNode,role=graphene.Int())
    #obtiene todos los modulos
    def resolve_all_roles(self,info,**kwargs):
        return Role.objects.all()

    #obtiene todos los modulos#
    def resolve_all_modules(self,info,**kwargs):
        return Module.objects.all()
    
    def resolve_all_profile_types(self,info,**kwargs):
        return ProfileType.objects.all()

    def resolve_permissions(self,info,**kwargs):
        idRole = kwargs.get('role')
        if idRole is not None:
            return Permissions.objects.filter(role_id=idRole)

    def resolve_user(self,info,**kwargs):
        idUser = kwargs.get('id')
        if idUser is not None:
            return User.objects.get(pk=idUser)

    def resolve_all_users(self,info,**kwargs):
        return User.objects.all()
    