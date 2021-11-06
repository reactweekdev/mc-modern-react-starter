import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

const InputField = props => {
    const {
        register,
        formState: { errors }
    } = useFormContext()

    const { name, label, icon, ...inputProps } = props

    return (
        <div className="input-field col s12">
            {icon ? <i className="material-icons prefix">icon</i> : null}
            <input
                name={name}
                id={name}
                placeholder={label}
                className="validate"
                {...register(name)}
                {...inputProps}
            />
            <span
                className="helper-text red-text"
                data-error="wrong"
                data-success="right"
            >
                {errors[name] ? errors[name].message : ''}
            </span>
        </div>
    )
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string
}

export default InputField
