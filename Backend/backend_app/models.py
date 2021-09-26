from django.db import models

class Module (models.Model):
    name = models.CharField(max_length=40,blank=False,default="N/D")
    description = models.CharField(max_length=40,blank=True)

class Role (models.Model):
    name = models.CharField(max_length=40,blank=False,default="N/D")
    description = models.CharField(max_length=40,blank=True)

class Permissions (models.Model):
    role = models.ForeignKey(Role,on_delete=models.CASCADE)
    module = models.ForeignKey(Module,on_delete=models.CASCADE)
    create = models.BooleanField(null=False,default=False)
    read = models.BooleanField(null=False,default=False)
    update = models.BooleanField(null=False,default=False)
    delete = models.BooleanField(null=False,default=False)
