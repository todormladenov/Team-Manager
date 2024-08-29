import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginFormValues, resolver } from "./loginFormValidation";
import { login } from "../../../services/authAPI";
import { User } from "../../../types/user";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
    const authContext = useContext(AuthContext);
    const [responseError, setResponseError] = useState<string | undefined>(undefined);
    const navigator = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({ resolver });

    const loginHandler = handleSubmit(async (data) => {
        try {
            const user: User = await login(data.email, data.password);
            authContext.changeAuthState(user);
            navigator('/');
        } catch (error) {
            if (error instanceof Error) {
                setResponseError(error.message);
            } else {
                setResponseError('Something went wrong please try again later');
            }
        }
    });

    return (
        <section id="login">
            <article className="narrow">
                <header className="pad-med">
                    <h1>Login</h1>
                </header>
                <form id="login-form" className="main-form pad-large" onSubmit={loginHandler}>
                    {responseError && <div className="error">{responseError}</div>}

                    <label>E-mail: <input type="text" {...register('email')} /></label>
                    {errors.email && <div className="error">{errors.email?.message}</div>}

                    <label>Password: <input type="password" {...register('password')} /></label>
                    {errors.password && <div className="error">{errors.password?.message}</div>}

                    <input className="action cta" type="submit" value="Sign In" />
                </form>
                <footer className="pad-small">Don't have an account?
                    <Link to="/auth/register" className="invert">Sign up here</Link>
                </footer>
            </article>
        </section>
    );
}