import PropTypes from 'prop-types'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import InputField from 'components/input/InputField'
import { Button } from 'components/UI'

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email required'),
    password: yup.string().min(5).max(10).required()
})

const LoginForm = ({ onFormSubmit }) => {
    const methods = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <FormProvider {...methods}>
            <form className="col s6 offset-s3">
                <div className="row">
                    <InputField name="email" label="Email" />
                </div>
                <div className="row">
                    <InputField name="password" label="Password" />
                </div>

                <div className="right">
                    <Button
                        label="Login"
                        onClick={methods.handleSubmit(onFormSubmit)}
                    />
                </div>
            </form>
        </FormProvider>
    )
}

LoginForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
}

export default LoginForm
