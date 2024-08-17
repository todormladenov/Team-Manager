export default function CreateTeam() {
    return (
        <section id="create">
            <article className="narrow">
                <header className="pad-med">
                    <h1>New Team</h1>
                </header>
                <form id="create-form" className="main-form pad-large">
                    {/* <div className="error">Error message.</div> */}
                    <label>Team name: <input type="text" name="name" /></label>
                    <label>Logo URL: <input type="text" name="logoUrl" /></label>
                    <label>Description: <textarea name="description"></textarea></label>
                    <input className="action cta" type="submit" value="Create Team" />
                </form>
            </article>
        </section>
    );
}