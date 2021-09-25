from rest_framework import serializers
from .models import User,Module,Role,Permissions
class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','firstName','lastName','address','email','password')

class ModuleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ('id','name','description')

class RoleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ('id','name', 'description')

class PermissionsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Permissions
        fields = ('id','role','module','create','read','update','delete')

