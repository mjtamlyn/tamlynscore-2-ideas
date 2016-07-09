from ..archer import Archer
from ..attributes import Gender
from ..configuration import Configuration


def test_archer():
    config = Configuration(gender=Gender())

    archer = Archer('Bob', config, gender=Gender.male)
    assert archer.name == 'Bob'
    assert archer.gender == Gender.male
