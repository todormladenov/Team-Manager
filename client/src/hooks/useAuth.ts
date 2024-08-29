import { useEffect, useState } from "react"
import { User } from "../types/user"
import { clearAccessToken, getAccessToken, setAccessToken } from "../utils/sesionTokenUtil";
import { getUser, logoutUser } from "../services/authAPI";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const [authState, setAuthState] = useState<User | undefined>(undefined);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const navigator = useNavigate();

    const changeAuthState = (state: User | undefined) => {
        if (state?.accessToken) {
            setAccessToken(state.accessToken);
        } else {
            clearAccessToken();
        }

        setAuthState(state);
    }

    const logout = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.error(error);
        } finally {
            changeAuthState(undefined);
            navigator('/');
        }
    }

    useEffect(() => {
        (async () => {
            const accessToken = getAccessToken();

            if (!accessToken) {
                return setIsAuthenticating(false);
            }

            try {
                const user = await getUser();
                user.accessToken = accessToken;
                changeAuthState(user);
            } catch (error) {
                clearAccessToken();
                navigator('/auth/login');
            } finally {
                setIsAuthenticating(false);
            }
        })();
    }, []);

    return {
        authState,
        changeAuthState,
        isAuthenticating,
        logout
    }
}