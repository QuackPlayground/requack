/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <p className="mt-5 text-sm text-center">Don't have an acount? <Link to="/register" className="font-bold text-blue-600">Register</Link></p>
        </AuthLayout>
    )
}

export default LoginPage;