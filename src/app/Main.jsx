import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import UserDetailsPage from './user-details/UserDetailsPage'
import CreateUser from './users/CreateUser'
import EditUser from './users/EditUser'
import UsersPage from './users/UsersPage'
import LoginPage from './login/LoginPage'

const Main = () => (
    <main className="container">
        <Switch>
            <PrivateRoute exact path="/users/create" component={CreateUser} />
            <PrivateRoute exact path="/users/:id/edit" component={EditUser} />
            <PrivateRoute exact path="/users/:id" component={UserDetailsPage} />
            <PrivateRoute exact path="/" component={UsersPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </main>
)

export default Main
