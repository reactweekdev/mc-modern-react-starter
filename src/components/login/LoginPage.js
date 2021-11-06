import React from 'react'

class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    _onInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    _onFormSubmit = () => {
        // THIS IS MOCK EXAMPLE
        const { email, password } = this.state

        if (email === 'r@w.com' && password === 'rw1234') {
            const authdata = window.btoa(email + ':' + password)
            localStorage.setItem('user', JSON.stringify(authdata))

            this.props.history.push('/')
            return
        }

        this.setState({ error: 'Invalid email/password' }, () => {
            setTimeout(() => {
                this.setState({ error: '' })
            }, 1500)
        })
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
                                onChange={this._onInputChange}
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
                                onChange={this._onInputChange}
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
                            onClick={this._onFormSubmit}
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
