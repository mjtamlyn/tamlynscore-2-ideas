import React from 'react';
import Relay from 'react-relay';


class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
    }

    onEmailChange = function(e) {
        this.setState({ email: e.target.value });
    }

    onPasswordChange = function(e) {
        this.setState({ password: e.target.value });
    }
    
    onSubmit = function(e) {
        e.preventDefault();
        let { email, password } = this.state;
    }

    render = function() {
        return (
            <form className="form login-form" onSubmit={ ::this.onSubmit }>
                <div className="form__widget">
                    <label for="id_email" className="form__label">Email</label>
                    <input id="id_email" name="email" type="email" className="login-form__email" onChange={ ::this.onEmailChange } value={ this.state.email } autoFocus="true" />
                </div>
                <div className="form__widget">
                    <label for="id_password" className="form__label">Password</label>
                    <input id="id_password" name="password" type="password" className="login-form__password" onChange={ ::this.onPasswordChange } value={ this.state.password } />
                </div>
                <input type="submit" className="btn form__submit" />
            </form>
        );
    }
};

export default LoginForm;
