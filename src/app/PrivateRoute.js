import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props =>
                localStorage.getItem('user') ? <Component {...props} /> : null
            // <Redirect to={'/login'} />
        }
    />
)

export default PrivateRoute
