import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, TeamFormValues } from "./createTeamValidation";
import { createTeam } from "../../../services/teamsAPI";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateTeam() {
    const navigator = useNavigate();
    const [responseError, setResponseError] = useState<string | undefined>(undefined);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TeamFormValues>({ resolver: yupResolver(schema) });

    const createHandler = handleSubmit(async (data) => {
        try {
            await createTeam(data);
            navigator('/teams');
        } catch (error) {
            if (error instanceof Error) {
                setResponseError(error.message);
            } else {
                setResponseError('Something went wrong please try again later');
            }
        }
    });

    return (
        <section id="create">
            <article className="narrow">
                <header className="pad-med">
                    <h1>New Team</h1>
                </header>
                <form id="create-form" className="main-form pad-large" onSubmit={createHandler}>
                    {responseError && <div className="error">{responseError}</div>}
                    
                    <label>Team name: <input type="text" {...register('name')} /></label>
                    {errors.name?.message && <div className="error">{errors.name?.message}</div>}

                    <label>Logo URL: <input type="text" {...register('logoUrl')} /></label>
                    {errors.logoUrl?.message && <div className="error">{errors.logoUrl?.message}</div>}

                    <label>Description: <textarea {...register('description')}></textarea></label>
                    {errors.description?.message && <div className="error">{errors.description?.message}</div>}

                    <input className="action cta" type="submit" value="Create Team" />
                </form>
            </article>
        </section>
    );
}