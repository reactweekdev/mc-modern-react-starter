import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useMount } from 'react-use'
import { Loader } from 'components/loader/Loader'

import { userService } from 'lib/services/userService'

import { UsersPageItem } from './UsersPageItem'

import './UsersPage.css'

const UsersPage = () => {
    const [users, setUsers] = useState([])

    useMount(async () => {
        const myUsers = await userService.fetchUsersAsync()

        setUsers(myUsers)
    })

    const renderUsers = users => {
        const usersList = users.map(user => {
            return <UsersPageItem user={user} key={user.id} />
        })
        return usersList
    }

    if (users.length === 0) {
        return <Loader text={'Loading users...'} />
    }

    return (
        <>
            <div className="card-panel">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    {renderUsers(users)}
                </table>
            </div>
            <div className="fixed-action-btn">
                <Link to="users/create" className="btn-floating btn-large blue">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        </>
    )
}

export default UsersPage
