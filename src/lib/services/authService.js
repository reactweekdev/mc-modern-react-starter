class AuthService {
    url = {
        login: '/'
    }

    login({ email, password }) {
        // this.url.login

        return new Promise((resolve, reject) => {
            if (email === 'r@w.com' && password === 'rw1234') {
                const authdata = window.btoa(`${email}:${password}`)
                localStorage.setItem('user', JSON.stringify(authdata))

                resolve({
                    status: 200,
                    message: 'success'
                })
                return
            }
            setTimeout(() => {
                reject({ status: 400, message: 'Invalid email/password' })
            }, 1500)
        })
    }
}

export const authService = new AuthService()
