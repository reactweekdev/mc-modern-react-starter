import { Component } from 'react';

import { authService } from 'lib/services/authService'

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    handleFormSubmit = async () => {
        try {
            // THIS IS MOCK EXAMPLE
            const { email, password } = this.state
            await authService.login({
                email,
                password
            })

            //TODO: Show success toast

            this.props.history.push('/')
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    render() {
        return (
            <div className="row">
                <form className="col s6 offset-s3">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">
                                account_circle
                            </i>
                            <input
                                id="email"
                                placeholder="Email"
                                type="email"
                                className="validate"
                                name="email"
                                onChange={this.handleInputChange}
                            />
                            <span
                                className="helper-text"
                                data-error="wrong"
                                data-success="right"
                            >
                                Enter your login email
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock</i>
                            <input
                                id="password"
                                placeholder="Password"
                                type="password"
                                className="validate"
                                name="password"
                                onChange={this.handleInputChange}
                            />
                            <span
                                className="helper-text"
                                data-error="wrong"
                                data-success="right"
                            >
                                Password must be strong
                            </span>
                        </div>
                    </div>
                    <div className="row center">
                        <div className="helper-text red-text">
                            {this.state.error && this.state.error}
                        </div>
                    </div>
                    <div className="right">
                        <div
                            className="waves-effect waves-light btn indigo"
                            onClick={this.handleFormSubmit}
                        >
                            <i className="material-icons left">cloud</i>Login
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage
