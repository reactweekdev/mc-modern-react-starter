import { Link } from 'react-router-dom'

import { useAuth } from 'app/auth-context'

const Header = () => {
    const { isAuthenticated, logout } = useAuth()
    return (
        <nav className="indigo">
            <div className="nav-wrapper container">
                <Link to="/">
                    <span className="brand-logo">Users App</span>
                </Link>
                {isAuthenticated && (
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li onClick={logout}>
                            <a>Logout</a>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export { Header }
