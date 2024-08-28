import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RegisterFormValues, schema } from "./registerFormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as auth from "../../../services/authAPI"
import { useState } from "react";

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormValues>({ resolver: yupResolver(schema) });
    const [responseError, setResponseError] = useState<string | undefined>(undefined);
    const navigator = useNavigate();

    const registerHandler = handleSubmit(async (data) => {
        const { email, username, password } = data;

        try {
            const user = await auth.register(email, username, password);
            navigator('/')
        } catch (error) {
            if (error instanceof Error) {
                setResponseError(error.message);
            } else {
                setResponseError('Something went wrong please try again later');
            }
        }
    });


    return (
        <section id="register">
            <article className="narrow">
                <header className="pad-med">
                    <h1>Register</h1>
                </header>
                <form id="register-form" className="main-form pad-large" onSubmit={registerHandler}>
                    {responseError && <div className="error">{responseError}</div>}

                    <label>E-mail: <input type="text" {...register('email')} /></label>
                    {errors.email?.message && <div className="error">{errors.email.message}</div>}

                    <label>Username: <input type="text" {...register('username')} /></label>
                    {errors.username?.message && <div className="error">{errors.username?.message}</div>}

                    <label>Password: <input type="password" {...register('password')} /></label>
                    {errors.password?.message && <div className="error">{errors.password?.message}</div>}

                    <label>Repeat: <input type="password" {...register('repass')} /></label>
                    {errors.repass?.message && <div className="error">{errors.repass?.message}</div>}

                    <input className="action cta" type="submit" value="Create Account" />
                </form>
                <footer className="pad-small">Already have an account?
                    <Link to="/auth/login" className="invert">Sign in here</Link>
                </footer>
            </article>
        </section >
    );
}