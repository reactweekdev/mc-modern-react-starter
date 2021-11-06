import { authService } from 'lib/services/authService'

import { useAuth } from 'app/auth-context'

import LoginForm from './LoginForm'

const LoginPage = () => {
    const { setAuthenticated } = useAuth()
    const handleFormSubmit = async formData => {
        try {
            // THIS IS MOCK EXAMPLE
            const { email, password } = formData
            await authService.login({
                email,
                password
            })

            //TODO: Show success toast
            setAuthenticated(true)
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
