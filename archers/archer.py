class Archer(object):

    def __init__(self, name, configuration, **attributes):
        self.name = name
        self.configuration = configuration
        self.configuration.set_attributes(self, attributes)

    def __str__(self):
        return self.name
