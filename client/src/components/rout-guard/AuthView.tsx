import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthView() {
    const { isAuth } = useContext(AuthContext)

    return isAuth
        ? <Outlet />
        : <Navigate to='/auth/login' />
}