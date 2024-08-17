import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section id="register">
            <article className="narrow">
                <header className="pad-med">
                    <h1>Register</h1>
                </header>
                <form id="register-form" className="main-form pad-large">
                    {/* <div className="error">Error message.</div> */}
                    <label>E-mail: <input type="text" name="email" /></label>
                    <label>Username: <input type="text" name="username" /></label>
                    <label>Password: <input type="password" name="password" /></label>
                    <label>Repeat: <input type="password" name="repass" /></label>
                    <input className="action cta" type="submit" value="Create Account" />
                </form>
                <footer className="pad-small">Already have an account?
                    <Link to="/auth/login" className="invert">Sign in here</Link>
                </footer>
            </article>
        </section>
    );
}