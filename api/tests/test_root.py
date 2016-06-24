from ..schema import schema


def test_root():
    result = schema.execute('''{
        root {
            ok
        }
    }''')
    assert result.data == {'root': {'ok': True}}
