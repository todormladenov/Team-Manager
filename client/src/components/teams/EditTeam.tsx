import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { schema, TeamFormValues } from "./create-team/createTeamValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetOneTeam } from "../../hooks/useGetOneTeam";
import { updateTeam } from "../../services/teamsAPI";

export default function EditTeam() {
    const { teamId } = useParams();
    const navigator = useNavigate();
    const [responseError, setResponseError] = useState<string | undefined>(undefined);
    const { team } = useGetOneTeam(teamId);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TeamFormValues>({
        resolver: yupResolver(schema),
        values: {
            name: team.name,
            logoUrl: team.logoUrl,
            description: team.description
        }
    });

    const editHandler = handleSubmit(async (data) => {
        setResponseError(undefined);

        try {
            if (!teamId) {
                throw new Error('Invalid Team ID');
            }

            await updateTeam(teamId, data);
            navigator(`/teams/details/${teamId}`)
        } catch (error) {
            if (error instanceof Error) {
                setResponseError(error.message);
            } else {
                setResponseError('Failed to update team');
            }
        }
    });
    
    return (
        <section id="edit">
            <article className="narrow">
                <header className="pad-med">
                    <h1>Edit Team</h1>
                </header>
                <form id="edit-form" className="main-form pad-large" onSubmit={editHandler}>
                    {responseError && <div className="error">{responseError}</div>}

                    <label>Team name: <input type="text" {...register('name')} /></label>
                    {errors.name?.message && <div className="error">{errors.name?.message}</div>}

                    <label>Logo URL: <input type="text" {...register('logoUrl')} /></label>
                    {errors.logoUrl?.message && <div className="error">{errors.logoUrl?.message}</div>}

                    <label>Description: <textarea {...register('description')}></textarea></label>
                    {errors.description?.message && <div className="error">{errors.description?.message}</div>}

                    <input className="action cta" type="submit" value="Save Changes" />
                </form>
            </article>
        </section>
    );
}