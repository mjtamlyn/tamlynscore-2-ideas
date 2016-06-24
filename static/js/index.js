import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';

import App from './components/app';


let Root = {
    queries: {
        root: () => Relay.QL`
            query { root }
        `,
    },
    params: {},
    name: 'Root',
};

ReactDOM.render(
    <Relay.RootContainer
        Component={ App }
        route={ Root }
    />,
    document.getElementById('app')
);
