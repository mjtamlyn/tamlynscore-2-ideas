jest.unmock('../app');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import App from '../app';


describe('app', () => {
    it('exists', () => {
        const root = { hello: 'bye' };
        const renderer = TestUtils.createRenderer();
        renderer.render(
            <App root={ root } />
        );
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual(root.hello);
    });
});
