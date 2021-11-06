export const emailValid = email => {
    const emailRegex =
        /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/
    return emailRegex.test(email)
}

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                window.location.reload(true)
            }

            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }

        return data
    })
}

export function authHeader() {
    // return authorization header with basic auth credentials
    const user = JSON.parse(localStorage.getItem('user'))

    if (user && user.authdata) {
        return { Authorization: `Basic ${user.authdata}` }
    } else {
        return {}
    }
}
