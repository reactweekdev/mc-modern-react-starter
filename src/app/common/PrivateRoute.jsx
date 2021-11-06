import { Redirect, Route } from 'react-router-dom'

import { useAuth } from 'app/auth-context'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth()
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={'/login'} />
                )
            }
        />
    )
}

export default PrivateRoute
