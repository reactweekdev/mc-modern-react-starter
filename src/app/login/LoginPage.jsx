import { useHistory } from 'react-router'

import { authService } from 'lib/services/authService'

import LoginForm from './LoginForm'

const LoginPage = () => {
    const history = useHistory()
    const handleFormSubmit = async formData => {
        try {
            // THIS IS MOCK EXAMPLE
            const { email, password } = formData
            await authService.login({
                email,
                password
            })

            //TODO: Show success toast

            history.push('/')
        } catch (error) {
            console.log(`error`, error)
            // this.setState({ error: error.message })
        }
    }

    return (
        <div className="row">
            <LoginForm onFormSubmit={handleFormSubmit} />
        </div>
    )
}

export default LoginPage
