import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm 
                label = "Full Name"
                name = "fullname"
                type = "text"
                placeholder = "Insert your name here..."
            />


            <InputForm 
                label = "Email"
                name = "email"
                type = "email"
                placeholder = "example@mail.com"
            />

            <InputForm 
                label = "Password"
                name = "password"
                type = "password"
                placeholder = "******"
            />

            <InputForm 
                label = "Confirm Password"
                name = "confirmPassword"
                type = "password"
                placeholder = "******"
            />

            <Button classname="w-full bg-blue-600">Register</Button>

        </form>
    )
}

export default FormRegister;