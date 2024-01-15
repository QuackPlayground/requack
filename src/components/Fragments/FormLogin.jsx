import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action="">
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

          <Button classname="w-full bg-blue-600">Login</Button>

        </form>
    )
}

export default FormLogin;