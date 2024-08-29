import { createContext, ReactNode } from "react";
import { UserContext } from "../../types/user";
import { useAuth } from "../../hooks/useAuth";

export const AuthContext = createContext<UserContext>({
    email: '',
    username: '',
    _id: '',
    accessToken: '',
    isAuth: false,
    changeAuthState: () => null
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
    const { authState, changeAuthState, isAuthenticating } = useAuth();

    const contextData: UserContext = {
        email: authState?.email || '',
        username: authState?.username || '',
        _id: authState?._id || '',
        accessToken: authState?.accessToken || '',
        isAuth: !!authState?._id,
        changeAuthState: changeAuthState
    }

    return (
        <AuthContext.Provider value={contextData}>
            {!isAuthenticating && children}
        </AuthContext.Provider>
    );
}