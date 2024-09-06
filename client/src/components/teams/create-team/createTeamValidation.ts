import * as yup from "yup"

export type TeamFormValues = {
    name: string,
    logoUrl: string,
    description: string,
}

export const schema = yup
    .object()
    .shape({
        name: yup.string().trim().required().min(4),
        logoUrl: yup.string().trim().required().matches(/^https?:\/\//, 'Logo URL must start with http:// or https://'),
        description: yup.string().trim().required().min(10),
    })
    .required()