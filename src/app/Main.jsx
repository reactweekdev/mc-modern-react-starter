import { Route, Switch } from 'react-router-dom'
// import { Redirect,  } from 'react-router-dom'

// import PrivateRoute from './common/PrivateRoute'
import UserDetailsPage from './user-details/UserDetailsPage'
import CreateUser from './users/CreateUser'
import EditUser from './users/EditUser'
import UsersPage from './users/UsersPage'
import LoginPage from './login/LoginPage'
import { useAuth } from './auth-context'

const Main = () => {
    const { isAuthenticated } = useAuth()
    return (
        <main className="container">
            <Switch>
                {isAuthenticated ? (
                    <>
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
                    </>
                ) : (
                    <Route path="*" component={LoginPage} />
                )}
            </Switch>
        </main>
    )
}

export default Main
