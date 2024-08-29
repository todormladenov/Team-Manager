import { User } from "../types/user";
import { get, post } from "./api";

const BASE_URL = 'http://localhost:3030/users';

export const login = (email: string, password: string): Promise<User> =>
    post<User>(`${BASE_URL}/login`, { email, password });

export const register = (email: string, username: string, password: string): Promise<User> =>
    post<User>(`${BASE_URL}/register`, { email, username, password });

export const getUser = () => get<User>(`${BASE_URL}/me`);

export const logoutUser = () => get(`${BASE_URL}/logout`);