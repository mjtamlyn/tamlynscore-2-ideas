from django.contrib import admin

from custom_user.admin import EmailUserAdmin
from custom_user.forms import EmailUserCreationForm

from .models import User


class UserCreationForm(EmailUserCreationForm):
    class Meta(EmailUserCreationForm.Meta):
        fields = ('name', 'email')


@admin.register(User)
class UserAdmin(EmailUserAdmin):
    list_display = ['name', 'email', 'is_staff']
    fieldsets = (
        (None, {'fields': ('name', 'email', 'password')}),
        ('Permissions', {'fields': (
            'is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions',
        )}),
        ('Important dates', {'fields': (
            'last_login', 'date_joined',
        )}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('name', 'email', 'password1', 'password2')
        }),
    )
    add_form = UserCreationForm
