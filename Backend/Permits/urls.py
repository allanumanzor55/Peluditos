from django.urls import path
from Permits import views
urlpatterns = [
    path('Permits/users/',views.user_list),
    path('Permits/users/<int:pk>/',views.user_detail),
    path('Permits/modules/',views.module_list),
    path('Permits/modules/<int:pk>/',views.module_detail),
    path('Permits/roles/',views.role_list),
    path('Permits/roles/<int:pk>/',views.role_detail),
    path('Permits/permissions/',views.permissions_list),
    path('Permits/permissions/<int:pk>/',views.permissions_detail)
]
