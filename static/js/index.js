import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';


let Root = {
    queries: {
        root: () => Relay.QL`
            query { root }
        `,
    },
    params: {},
    name: 'Root',
};

let App = function(props) {
    return <div>{ props.root.hello }</div>;
};

App = Relay.createContainer(App, {
    fragments: {
        root: () => Relay.QL`
            fragment on Root {
                hello
            }
        `,
    },
});

ReactDOM.render(
    <Relay.RootContainer
        Component={ App }
        route={ Root }
    />,
    document.getElementById('app')
);
