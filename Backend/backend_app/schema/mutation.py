import graphene

from backend_app.models import *
from .types import *

#Mutations de Modulos
class ModuleInput(graphene.InputObjectType):
    id = graphene.ID()
    name= graphene.String()
    description = graphene.String()

class CreateModule(graphene.Mutation):
    module = graphene.Field(ModuleNode)
    
    class Input:
        module_data = ModuleInput(required=True)

    @staticmethod
    def mutate(root,info,module_data=None):
        module_instance = Module.objects.create(name=module_data.name,description=module_data.description)
        return CreateModule(module=module_instance)

class UpdateModule(graphene.Mutation):
    module = graphene.Field(ModuleNode)

    class Input:
        module_data = ModuleInput(required=True)

    @staticmethod
    def mutate(root,info,module_data=None):
        module_instance = Module.objects.get(pk=module_data.id)
        if module_instance:
            if module_data.name is not None: module_instance.name=module_data.name
            if module_data.description is not None: module_instance.description = module_data.description
            module_instance.save()
            return UpdateModule(module=module_instance)
        return UpdateModule(module=None)

class DeleteModule(graphene.Mutation):
    module = graphene.Field(ModuleNode)

    class Input:
        id =graphene.ID()

    @staticmethod
    def mutate(root,info,id):
        Module.objects.get(pk=id).delete()
        return None


#Mutations de Roles

class RoleInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()
    description = graphene.String()

class CreateRole(graphene.Mutation):
    class Input:
        role_data = RoleInput(required=True)
    role = graphene.Field(RoleNode)

    @staticmethod
    def mutate(root,info,role_data=None):
        obj = Role.objects.create(name=role_data.name,description=role_data.description)
        return CreateRole(role=obj)

class UpdateRole(graphene.Mutation):
    role = graphene.Field(RoleNode)
    class Input:
        role_data = RoleInput(required=True)

    @staticmethod
    def mutate(root,info,role_data=None):
        role_instance = Role.objects.get(pk=role_data.id)
        if role_instance:
            if role_data.name is not None: role_instance.name = role_data.name
            if role_data.description is not None: role_instance.description = role_data.description
            role_instance.save()
            return UpdateRole(role=role_instance)
        return UpdateRole(role=None)

class DeleteRole(graphene.Mutation):
    role = graphene.Field(RoleNode)

    class Input:
        id = graphene.ID()

    @staticmethod
    def mutate(root,info,id):
        Role.objects.get(pk=id).delete()
        return None

#Mutations de Tipos de perfil
class ProfileTypeInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()
    description = graphene.String()

class CreateProfileType(graphene.Mutation):
    profileType = graphene.Field(ProfileTypeNode)
    class Input:
        profile_type_data= ProfileTypeInput(required=True)
        
    @staticmethod
    def mutate(root,info,profile_type_data=None):
        profileType_instance = ProfileType.objects.create(
            profileName=profile_type_data.name,description=profile_type_data.description)
        return CreateProfileType(profileType=profileType_instance)

#Mutations de Permisos
class PermissionsInput(graphene.InputObjectType):
    id = graphene.ID()
    role_id = graphene.Int()
    module_id = graphene.Int()
    create = graphene.Boolean()
    read = graphene.Boolean()
    update = graphene.Boolean()
    delete = graphene.Boolean()

class CreatePermissions(graphene.Mutation):
    permission = graphene.Field(PermissionsNode)
    class Input:
        permission_data = PermissionsInput(required=True)

    @staticmethod
    def mutate(root,info,permission_data=None):
        obj = Permissions.objects.create(
            role_id=permission_data.role_id,
            module_id=permission_data.module_id,
            create=permission_data.create,
            read=permission_data.read,
            update=permission_data.update,
            delete=permission_data.delete)
        return CreatePermissions(permission=obj)

class UpdatePermission(graphene.Mutation):
    permission = graphene.Field(PermissionsNode)
    
    class Input:
        perm_data = PermissionsInput(required=True)

    @staticmethod
    def mutate(root,info,perm_data=None):
        perm_instance = Permissions.objects.get(module_id=perm_data.module_id,role_id=perm_data.role_id)
        if perm_instance:
            if perm_data.create is not None: perm_instance.create = perm_data.create
            if perm_data.read is not None: perm_instance.read = perm_data.read
            if perm_data.update is not None: perm_instance.update = perm_data.update
            if perm_data.delete is not None: perm_instance.delete = perm_data.delete
            perm_instance.save()
            return UpdatePermission(permission=perm_instance)
        return UpdatePermission(permission=None)

class DeletePermission(graphene.Mutation):
    permission = graphene.Field(PermissionsNode)

    class Input:
        id = graphene.ID()

    @staticmethod
    def mutate(root,info,id):
        Permissions.object.get(pk=id).delete()
        return None

class AddressInput(graphene.InputObjectType):
    department = graphene.String()
    city = graphene.String()
    suburb = graphene.String()
    street = graphene.String()
    residence = graphene.String()
    reference = graphene.String()

class UserInput(graphene.InputObjectType):
    id = graphene.ID()
    role_id = graphene.Int()
    profileType_id = graphene.Int()
    email = graphene.String()
    password = graphene.String()
    firstName = graphene.String()
    lastName = graphene.String()
    dni = graphene.String()
    age = graphene.String()
    principalCellphone = graphene.String()
    auxiliarCellphone = graphene.String()
    address = AddressInput(required=True)

class CreateUser(graphene.Mutation):
    user = graphene.Field(UserNode)

    class Input:
        user_data = UserInput(required=True)
    
    @staticmethod
    def mutate(root,info,user_data=None):
        address_instance = Address.objects.create(
            department=user_data.address.department,
            city=user_data.address.city,
            suburb=user_data.address.suburb,
            street=user_data.address.street,
            residence=user_data.address.residence,
            reference=user_data.address.reference
        )
        user_instance = User.objects.create(
            role_id = user_data.role_id,
            profileType_id=user_data.profileType_id,
            address = address_instance,
            email=user_data.email,
            password=user_data.password,
            firstName=user_data.firstName,
            lastName=user_data.lastName,
            dni=user_data.dni,
            age=user_data.age,
            principalCellphone=user_data.principalCellphone,
            auxiliarCellphone=user_data.auxiliarCellphone
        )
        return CreateUser(user=user_instance)

class Mutation(graphene.AbstractType):
    create_module = CreateModule.Field()
    update_module = UpdateModule.Field()
    delete_module = DeleteModule.Field()
    create_role = CreateRole.Field()
    update_role = UpdateRole.Field()
    delete_role = DeleteRole.Field()
    create_profile_type = CreateProfileType.Field()
    create_permissions = CreatePermissions.Field()
    update_permissions = UpdatePermission.Field()
    delete_permissions = DeletePermission.Field()
    create_user = CreateUser.Field()