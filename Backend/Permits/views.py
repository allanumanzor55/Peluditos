#V1.0
# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .serializers import UserSerializers#para v.1 y v.2
# from .models import User#para v.1 y v.2
# from rest_framework import status
# from django.http import Http404
#v.2
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status
from .models import *
from .serializers import *
from rest_framework.decorators import api_view

@api_view(['GET','POST','DELETE'])
def user_list(request):
    #GET lista de usuarios, POST un nuevo usuario y DELETe todos los usuarios
    if request.method == 'GET':
        users = User.objects.all()
        name = request.GET.get('firstName',None)
        if name is not None:#Si hay una llave 'firstName' en la url que no es None, entonces filtra por el valor de esa llave
            users = users.filter(firstName__icontains=name)#redifinimos users con filter
        user_serializer = UserSerializers(users,many=True)#de haberse aplicado la condicion, users estara filtrado, de no ser asi no lo estara
        return JsonResponse(user_serializer.data,safe=False)#safe=False por objects serialization
    elif request.method =='POST':
        user_data = JSONParser().parse(request)
        user_serializer = UserSerializers(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse(user_serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(user_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = User.objects.all().delete()
        return JsonResponse({'message':'{} Users were deleted successfull'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','PUT','DELETE'])
def user_detail(request,pk):
    #Busca un usuario por su llave primaria
    try:
        user = User.objects.get(pk=pk)
        if request.method == 'GET':
            user_serializer = UserSerializers(user)
            return JsonResponse(user_serializer.data)
        elif request.method == 'PUT':
            user_data = JSONParser().parse(request)
            user_serializer = UserSerializers(user,data=user_data)
            if user_serializer.is_valid():
                user_serializer.save()
                return JsonResponse(user_serializer.data)
            return JsonResponse(user_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            user.delete()
            return JsonResponse({'message':'Usuarios was deleted successfully !'},status= status.HTTP_204_NO_CONTENT)
    except User.DoesNotExist:
        return JsonResponse({'message':'The user doesn\'t exist'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET','POST','DELETE'])
def module_list(request):
    if request.method == 'GET':
        modules = Module.objects.all()
        name = request.GET.get('name',None)
        if name is not None:#Si hay una llave 'firstName' en la url que no es None, entonces filtra por el valor de esa llave
            modules = modules.filter(name__icontains=name)#redifinimos modules con filter
        module_serializer = ModuleSerializers(modules,many=True)#de haberse aplicado la condicion, modules estara filtrado, de no ser asi no lo estara
        return JsonResponse(module_serializer.data,safe=False)#safe=False por objects serialization
    elif request.method =='POST':
        module_data = JSONParser().parse(request)
        module_serializer = ModuleSerializers(data=module_data)
        if module_serializer.is_valid():
            module_serializer.save()
            return JsonResponse(module_serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(module_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Module.objects.all().delete()
        return JsonResponse({'message':'{} Module were deleted successfull'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','PUT','DELETE'])
def module_detail(request,pk):
    try:
        module = Module.objects.get(pk=pk)
        if request.method == 'GET':
            module_serializer = ModuleSerializers(module)
            return JsonResponse(module_serializer.data)
        elif request.method == 'PUT':
            module_data = JSONParser().parse(request)
            module_serializer = ModuleSerializers(module,data=module_data)
            if module_serializer.is_valid():
                module_serializer.save()
                return JsonResponse(module_serializer.data)
            return JsonResponse(module_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            module.delete()
            return JsonResponse({'message':'Module was deleted successfully !'},status= status.HTTP_204_NO_CONTENT)
    except Module.DoesNotExist:
        return JsonResponse({'message':'The module doesn\'t exist'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET','POST','DELETE'])
def role_list(request):
    if request.method == 'GET':
        roles = Role.objects.all()
        name = request.GET.get('name',None)
        if name is not None:#Si hay una llave 'firstName' en la url que no es None, entonces filtra por el valor de esa llave
            roles = roles.filter(name__icontains=name)#redifinimos roles con filter
        role_serializer = RoleSerializers(roles,many=True)#de haberse aplicado la condicion, modules estara filtrado, de no ser asi no lo estara
        return JsonResponse(role_serializer.data,safe=False)#safe=False por objects serialization
    elif request.method =='POST':
        role_data = JSONParser().parse(request)
        role_serializer = RoleSerializers(data=role_data)
        if role_serializer.is_valid():
            role_serializer.save()
            return JsonResponse(role_serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(role_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Role.objects.all().delete()
        return JsonResponse({'message':'{} Role were deleted successfull'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','PUT','DELETE'])
def role_detail(request,pk):
    try:
        role = Role.objects.get(pk=pk)
        if request.method == 'GET':
            role_serializer = RoleSerializers(role)
            return JsonResponse(role_serializer.data)
        elif request.method == 'PUT':
            role_data = JSONParser().parse(request)
            role_serializer = RoleSerializers(role,data=role_data)
            if role_serializer.is_valid():
                role_serializer.save()
                return JsonResponse(role_serializer.data)
            return JsonResponse(role_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            role.delete()
            return JsonResponse({'message':'Role was deleted successfully !'},status= status.HTTP_204_NO_CONTENT)
    except Role.DoesNotExist:
        return JsonResponse({'message':'The role doesn\'t exist'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET','POST','DELETE'])
def permissions_list(request):
    if request.method == 'GET':
        permissions = Permissions.objects.all()
        role = request.GET.get('role',None)
        if role is not None:#Si hay una llave 'firstName' en la url que no es None, entonces filtra por el valor de esa llave
            permissions = permissions.filter(role__icontains=role)#redifinimos permissions con filter
        permissions_serializer = PermissionsSerializers(permissions,many=True)#de haberse aplicado la condicion, modules estara filtrado, de no ser asi no lo estara
        return JsonResponse(permissions_serializer.data,safe=False)#safe=False por objects serialization
    elif request.method =='POST':
        permissions_data = JSONParser().parse(request)
        permissions_serializer = PermissionsSerializers(data=permissions_data)
        if permissions_serializer.is_valid():
            permissions_serializer.save()
            return JsonResponse(permissions_serializer.data,status=status.HTTP_201_CREATED)
        return JsonResponse(permissions_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Module.objects.all().delete()
        return JsonResponse({'message':'{} Module were deleted successfull'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','PUT','DELETE'])
def permissions_detail(request,pk):
    try:
        permissions = Permissions.objects.get(pk=pk)
        if request.method == 'GET':
            permissions_serializers = PermissionsSerializers(permissions)
            return JsonResponse(permissions_serializers.data)
        elif request.method == 'PUT':
            permissions_data = JSONParser().parse(request)
            permissions_serializers = PermissionsSerializers(permissions,data=permissions_data)
            if permissions_serializers.is_valid():
                permissions_serializers.save()
                return JsonResponse(permissions_serializers.data)
            return JsonResponse(permissions_serializers.errors,status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            permissions.delete()
            return JsonResponse({'message':'Permissions was deleted successfully !'},status= status.HTTP_204_NO_CONTENT)
    except Permissions.DoesNotExist:
        return JsonResponse({'message':'The permissions doesn\'t exist'}, status=status.HTTP_404_NOT_FOUND)