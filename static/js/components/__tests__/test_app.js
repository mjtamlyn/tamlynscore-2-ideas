jest.unmock('../app');
jest.unmock('../login-form');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import App from '../app';
import LoginForm from '../login-form';


describe('app', () => {
    it('exists', () => {
        const root = { hello: 'bye' };
        const renderer = TestUtils.createRenderer();
        renderer.render(
            <App root={ root } />
        );
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        const main = result.props.children[1];
        const hello = main.props.children[0];
        const form = main.props.children[1];
        expect(hello).toEqual(root.hello);
        expect(form.type).toBe(LoginForm);
    });
});
