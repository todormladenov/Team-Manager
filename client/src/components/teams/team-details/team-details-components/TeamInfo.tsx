import { TeamWithMembers } from "../../../../types/teams";

export default function TeamInfo({ team }: { team: TeamWithMembers }) {
    return (
        <div className="tm-preview">
            <img src={team.logoUrl} className="team-logo left-col" />
            <h2>{team.name}</h2>
            <p>{team.description}</p>
            <span className="details">{team.members.length} Members</span>
        </div>
    );
}