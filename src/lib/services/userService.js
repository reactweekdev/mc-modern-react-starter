import { BASE_URL } from 'utils/const'

import User from '../models/User'

class UserService {
    #url = {
        users: '/users'
    }

    fetchUsers() {
        return fetch(`${BASE_URL}/users`)
            .then(response => response.json())
            .then(users => {
                console.log(users)
                const myUsers = users.map(user => new User(user))

                return myUsers
            })
    }

    async fetchUsersAsync() {
        try {
            const reqUrl = `${BASE_URL}${this.#url.users}`

            const res = await fetch(reqUrl)
            const users = await res.json()

            const myUsers = users.map(user => new User(user))

            return myUsers
        } catch (error) {
            throw new Error('API call failed')
        }
    }
}

export const userService = new UserService()
