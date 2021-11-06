import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Redirect,  } from 'react-router-dom'

// import PrivateRoute from './common/PrivateRoute'
// import { Loader } from 'components/loader/Loader'

import { useAuth } from './auth-context'
import LoginPage from './login/LoginPage'

const UserDetailsPage = lazy(() => import('./user-details/UserDetailsPage'))
const CreateUser = lazy(() => import('./users/CreateUser'))
const EditUser = lazy(() => import('./users/EditUser'))
const UsersPage = lazy(() => import('./users/UsersPage'))

const Main = () => {
    const { isAuthenticated } = useAuth()
    return (
        <main className="container">
            <Switch>
                {isAuthenticated ? (
                    <Suspense fallback={<h1>Fallback loading</h1>}>
                        <Route
                            exact
                            path="/users/create"
                            component={CreateUser}
                        />
                        <Route
                            exact
                            path="/users/:id/edit"
                            component={EditUser}
                        />
                        <Route
                            exact
                            path="/users/:id"
                            component={UserDetailsPage}
                        />
                        <Route path="/" component={UsersPage} />
                    </Suspense>
                ) : (
                    <Route path="*" component={LoginPage} />
                )}
            </Switch>
        </main>
    )
}

export default Main
