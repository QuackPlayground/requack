/* eslint-disable react/prop-types */
const AuthLayout = (props) => {

    const {title, children} = props;

    return (
        <div className="w-full max-w-xs">
            <h1 className="mb-2 text-3xl font-bold text-blue-600">{title}</h1>
            <p className="mb-8 font-medium text-slate-500">
            Welcome, Please enter your details
            </p>
            {children}
        </div>
    )
}

export default AuthLayout;