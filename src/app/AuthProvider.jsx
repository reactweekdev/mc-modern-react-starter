import { useMemo, useState } from 'react'
import { useMount } from 'react-use'

import { authService } from 'lib/services/authService'

import { AuthContext } from './auth-context'

const AuthProvider = ({ children }) => {
    // const providerValue = useState(false)
    const [isAuthenticated, setAuthenticated] = useState(false)

    useMount(() => {
        const isAuthenticated = authService.isAuthenticated()
        setAuthenticated(isAuthenticated)
    })

    const logout = () => {
        authService.logout()
        setAuthenticated(false)
    }

    const providerValue = useMemo(
        () => ({
            isAuthenticated,
            setAuthenticated,
            logout
        }),
        [isAuthenticated]
    )

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
