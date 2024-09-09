import { Link } from "react-router-dom";
import { Member } from "../../../../types/members";

type MemberListProps = {
    members: Member[];
    userStatus: string;
    onRemoveMember: (memberId: string) => void;
};

export default function MemberList({ members, userStatus, onRemoveMember }: MemberListProps) {
    return (
        <div className="pad-large">
            <h3>Members</h3>
            <ul className="tm-members">
                {members.map(member =>
                    <li key={member._id}>{member.user?.username}
                        {userStatus === 'owner' &&
                            <Link to='#' onClick={() => onRemoveMember(member._id)} className="tm-control action">Remove from team</Link>
                        }
                    </li>)
                }
            </ul>
        </div>
    );
}