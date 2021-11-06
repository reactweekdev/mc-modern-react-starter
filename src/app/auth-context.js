import { createContext, useContext } from 'react'

export const AuthContext = createContext(undefined)

export const useAuth = () => {
    const ctx = useContext(AuthContext)

    if (!ctx) {
        throw new Error('useAuth can be used only inside AuthProvider')
    }

    return ctx
}
