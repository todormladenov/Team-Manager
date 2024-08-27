import { Resolver } from "react-hook-form"

export type LoginFormValues = {
    email: string,
    password: string
}

type Error = {
    type: string,
    message: string
}

export const resolver: Resolver<LoginFormValues> = async (values) => {
    const errors: Record<string, Error> = {};

    if (!values.email.trim()) {
        errors.email = {
            type: 'required',
            message: 'Email is Required'
        }
    }

    if (!values.password.trim()) {
        errors.password = {
            type: 'required',
            message: 'Password is Required'
        }
    }

    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors
    }
}