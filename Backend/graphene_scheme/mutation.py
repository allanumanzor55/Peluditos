import graphene
from backend_app.models import *
from .types import *

class CreateModuleMutation(graphene.Mutation):
    class Input:
        name=graphene.String()
        description= graphene.String()
    name = graphene.Field(ModuleType)

    @staticmethod
    def mutate(root,info,**kwargs):
        name = kwargs.get('name','').strip()
        description = kwargs.get('description','').strip()
        obj = Module.objects.create(name=name,description=description)
        return CreateModuleMutation(name=obj)

class CreateRoleMutation(graphene.Mutation):
    class Input:
        name=graphene.String()
        description= graphene.String()
    name = graphene.Field(RoleType)

    @staticmethod
    def mutate(root,info,**kwargs):
        name = kwargs.get('name','').strip()
        description = kwargs.get('description','').strip()
        obj = Role.objects.create(name=name,description=description)
        return CreateRoleMutation(name=obj)

class CreatePermissionsMutation(graphene.Mutation):
    class Input:
        role = graphene.Int()
        module = graphene.Int()
        create = graphene.Boolean()
        read = graphene.Boolean()
        update = graphene.Boolean()
        delete = graphene.Boolean()
    name = graphene.Field(PermissionsType)

    def mutate(root,info,**kwargs):
        role = kwargs.get('role',0)
        module = kwargs.get('module',0)
        create = kwargs.get('create',0)
        read = kwargs.get('read',0)
        update = kwargs.get('update',0)
        delete = kwargs.get('delete',0)
        obj = Permissions.objects.create(role=role,module=module,
        create=create,read=read,update=update,delete=delete)
        return CreatePermissionsMutation(name=obj)

class Mutation(graphene.AbstractType):
    create_module = CreateModuleMutation.Field()
    create_role = CreateRoleMutation.Field()
    create_permissions = CreatePermissionsMutation.Field()
