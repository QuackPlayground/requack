/* eslint-disable react/prop-types */
import Button from "./components/Elements/Button"

function App() {

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="mb-2 text-3xl font-bold text-blue-600">Login</h1>
        <p className="mb-8 font-medium text-slate-500">
          Welcome, Please enter your details
        </p>
        <form action="">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-slate-700">
              Email
            </label>
            <input type="email" className="w-full px-3 py-2 text-sm border rounded text-slate-700 placeholder:opacity-50" placeholder="example@mail.com"/>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-bold text-slate-700">
              Password
            </label>
            <input type="password" className="w-full px-3 py-2 text-sm border rounded text-slate-700 placeholder:opacity-50" placeholder="*****"/>
          </div>

          <Button classname="w-full bg-blue-600">Login</Button>

        </form>
      </div>
    </div>
  )
}

export default App
