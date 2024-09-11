import { Link, useNavigate } from "react-router-dom";
import TeamLayout from "./TeamLayout";
import { useTeams } from "../../../hooks/useTeams";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import OverlayDialog from "../../overlay-dialog/OverlayDialog";

export default function TeamsCatalog() {
    const navigator = useNavigate();
    const { teams, error } = useTeams();
    const { isAuth } = useContext(AuthContext);

    return (
        <section id="browse">

            {error &&
                <OverlayDialog
                    message={error.message}
                    onClose={() => navigator(-1)}
                />}

            <article className="pad-med">
                <h1>Team Browser</h1>
            </article>
            {isAuth &&
                <article className="layout narrow">
                    <div className="pad-small"><Link to="/teams/create-team" className="action cta">Create Team</Link></div>
                </article>
            }

            {teams.map(team => <TeamLayout team={team} key={team._id} />)}

        </section>
    );
}