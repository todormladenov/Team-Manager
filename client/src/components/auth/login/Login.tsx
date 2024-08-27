import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginFormValues, resolver } from "./loginFormValidation";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({ resolver });

    const loginHandler = handleSubmit((data) => console.log(data))

    return (
        <section id="login">
            <article className="narrow">
                <header className="pad-med">
                    <h1>Login</h1>
                </header>
                <form id="login-form" className="main-form pad-large" onSubmit={loginHandler}>

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