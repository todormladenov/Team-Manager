import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section id="login">
            <article className="narrow">
                <header className="pad-med">
                    <h1>Login</h1>
                </header>
                <form id="login-form" className="main-form pad-large">
                    {/* <div className="error">Error message.</div> */}
                    <label>E-mail: <input type="text" name="email" /></label>
                    <label>Password: <input type="password" name="password" /></label>
                    <input className="action cta" type="submit" value="Sign In" />
                </form>
                <footer className="pad-small">Don't have an account?
                    <Link to="/auth/register" className="invert">Sign up here</Link>
                </footer>
            </article>
        </section>
    );
}