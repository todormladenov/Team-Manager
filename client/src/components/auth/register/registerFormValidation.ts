import * as yup from "yup"

export type RegisterFormValues = {
    email: string,
    username: string,
    password: string,
    repass: string,
}

export const schema = yup
    .object()
    .shape({
        email: yup.string().trim().required().email(),
        username: yup.string().trim().required().min(4),
        password: yup.string().trim().required().min(6),
        repass: yup.string().trim().required().oneOf([yup.ref('password')], 'Passwords must match'),
    })
    .required()