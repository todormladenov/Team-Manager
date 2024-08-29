export interface User {
    email: string,
    username: string,
    _id: string,
    accessToken: string,
}

export interface UserContext extends User {
    isAuth: boolean,
    changeAuthState: (state: User | undefined) => void,
}