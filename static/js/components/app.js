import React from 'react';
import Relay from 'react-relay';

require('../../sass/app.sass');

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
