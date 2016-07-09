class Configuration(object):

    def __init__(self, **attributes):
        self.attributes = attributes

    def set_attributes(self, archer, attributes):
        for name, attr in self.attributes.items():
            setattr(archer, name, attr.process(attributes.get(name)))
