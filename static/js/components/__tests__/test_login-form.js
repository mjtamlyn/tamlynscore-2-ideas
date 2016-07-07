jest.unmock('../login-form');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import LoginForm from '../login-form';


describe('login-form', () => {
    it('renders', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(
            <LoginForm />
        );
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('form');
    });
});
