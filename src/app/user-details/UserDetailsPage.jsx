import { Component } from 'react';

import { BASE_URL } from '../../utils/const'
import { Loader } from '../../components/loader/Loader'

import { UserDetails } from './UserDetails'

class UserDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            error: ''
        }
    }

    componentDidMount() {
        this.fetchUser()
    }

    fetchUser = () => {
        const userId = this.props.match.params.id

        const userUrl = `${BASE_URL}/users/${userId}`

        fetch(userUrl)
            .then(response => response.json())
            .then(user => {
                this.setState({
                    user,
                    isDeleting: false
                })
            })
    }

    deleteUser = () => {
        const { id: userId } = this.props.match.params

        const deleteUrl = `${BASE_URL}/users/${userId}`

        this.setState({ isDeleting: true }, () => {
            fetch(deleteUrl, {
                method: 'DELETE'
            }).then(() => {
                this.props.history.push('/')
            })
        })
    }

    render() {
        const { user, isDeleting } = this.state

        if (isDeleting) {
            return <Loader text={`Deleting user ${user.name}`} />
        }

        if (!user) {
            return <Loader text={'Loading user details...'} />
        }

        return <UserDetails user={user} onDeleteUser={this.deleteUser} />
    }
}

export default UserDetailsPage
