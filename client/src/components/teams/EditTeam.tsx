export default function EditTeam() {
    return (
        <section id="edit">
            <article className="narrow">
                <header className="pad-med">
                    <h1>Edit Team</h1>
                </header>
                <form id="edit-form" className="main-form pad-large">
                    {/* <div className="error">Error message.</div> */}
                    <label>Team name: <input type="text" name="name" /></label>
                    <label>Logo URL: <input type="text" name="logoUrl" /></label>
                    <label>Description: <textarea name="description"></textarea></label>
                    <input className="action cta" type="submit" value="Save Changes" />
                </form>
            </article>
        </section>
    );
}