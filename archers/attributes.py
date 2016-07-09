from enum import Enum


class Attribute(object):
    def process(self, value):
        return value


class EnumAttributeBase(type):
    def __new__(cls, name, bases, attrs):
        super_new = super().__new__

        # Also ensure initialization is only performed for subclasses of EnumAttribute
        # (excluding EnumAtrribute class itself).
        parents = [b for b in bases if isinstance(b, EnumAttributeBase)]
        if not parents:
            return super_new(cls, name, bases, attrs)

        if attrs.get('enum'):
            attrs.update(attrs['enum']._member_map_)
        return super_new(cls, name, bases, attrs)


class EnumAttribute(Attribute, metaclass=EnumAttributeBase):
    pass


class GenderEnum(Enum):
    male = 'male'
    female = 'female'


class Gender(EnumAttribute):
    enum = GenderEnum
