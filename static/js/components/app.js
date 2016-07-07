import React from 'react';
import Relay from 'react-relay';

import LoginForm from './login-form';

// require('../../sass/app.sass');

let App = function(props) {
    return (
        <div className="app">
            <header className="header">
                <a className="header__link" href="/login/">Log in</a>
            </header>
            <div className="main">
                { props.root.hello }
                <LoginForm />
            </div>
        </div>
    );
};

export default Relay.createContainer(App, {
    fragments: {
        root: () => Relay.QL`
            fragment on Root {
                hello
            }
        `,
    },
});
