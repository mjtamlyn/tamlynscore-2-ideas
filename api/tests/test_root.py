from ..schema import schema


def test_root():
    result = schema.execute('''{
        root {
            hello
        }
    }''')
    assert result.data == {'root': {'hello': 'world'}}
