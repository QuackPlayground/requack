import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const FormLogin = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href= "/products";
  }

  const emailRef = useRef(null);

  useEffect(() => {
    // langsung ke email
    emailRef.current.focus()
  }, [])

  return (
      <form onSubmit={handleLogin}>
        <InputForm 
          label = "Email"
          name = "email"
          type = "email"
          placeholder = "example@mail.com"
          ref = {emailRef}
        />

        <InputForm 
          label = "Password"
          name = "password"
          type = "password"
          placeholder = "******"
        />

        <Button classname="w-full bg-blue-600" type="submit">Login</Button>

      </form>
  )
}

export default FormLogin;