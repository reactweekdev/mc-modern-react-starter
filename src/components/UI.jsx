import { memo } from 'react'
// import PropTypes from 'prop-types'

/**
 * Button
 */
const ButtonCore = ({ label, onClick, children }) => (
    <div className="waves-effect waves-light btn indigo" onClick={onClick}>
        {label ? label : children}
    </div>
)

export const Button = memo(ButtonCore)
