import { Component } from 'react'

import { Loader } from '../../components/loader/Loader'
import { BASE_URL } from '../../utils/const'

import { UserForm } from './UserForm'

export class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.id

        const userUrl = `${BASE_URL}/users/${userId}`

        fetch(userUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user: data
                })
            })
    }

    updateUser = body => {
        const id = this.props.match.params.id

        this.setState({
            isUpdating: true
        })

        const editUserUrl = `${BASE_URL}/users/${id}`

        fetch(editUserUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(() => {
                this.props.history.push('/')
            })
    }

    render() {
        const { user, isUpdating } = this.state

        if (isUpdating) {
            return <Loader text={'Updating user...'} />
        }
        return (
            <>
                <div className="row">
                    <h4>Edit user</h4>
                </div>
                <div className="card-panel">
                    <div className="row">
                        <h5>Edit user details</h5>
                    </div>
                    <div className="row">
                        <UserForm user={user} onUserUpdate={this.updateUser} />
                    </div>
                </div>
            </>
        )
    }
}

export default EditUser
