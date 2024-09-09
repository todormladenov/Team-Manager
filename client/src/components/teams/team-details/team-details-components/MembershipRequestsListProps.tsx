import { Link } from "react-router-dom";
import { Member } from "../../../../types/members";

type MembershipRequestsListProps = {
    pendingMembers: Member[];
    onApprovePending: (memberId: string) => void;
    onRemovePending: (memberId: string) => void;
}

export default function MembershipRequestsList({ pendingMembers, onApprovePending, onRemovePending }: MembershipRequestsListProps) {
    return (
        <div className="pad-large">
            <h3>Membership Requests</h3>
            <ul className="tm-members">
                {pendingMembers.map(member =>
                    <li key={member._id}>{member.user?.username}
                        <Link to="#" onClick={() => onApprovePending(member._id)} className="tm-control action">Approve</Link>
                        <Link to="#" onClick={() => onRemovePending(member._id)} className="tm-control action">Decline</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}