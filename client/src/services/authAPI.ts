import { User } from "../types/user";
import { post } from "./api";

const BASE_URL = 'http://localhost:3030/users';

export const login = (email: string, password: string): Promise<User> =>
    post<User>(`${BASE_URL}/login`, { email, password });

export const register = (email: string, username: string, password: string): Promise<User> =>
    post<User>(`${BASE_URL}/register`, { email, username, password });