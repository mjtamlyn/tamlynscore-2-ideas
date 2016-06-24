import React from 'react';
import Relay from 'react-relay';

let App = function(props) {
    return (
        <div>{ props.root.hello }</div>
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
