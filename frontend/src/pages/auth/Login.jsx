import Button from "../../components/ common/Button";
import Input from "../../components/ common/Input";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          SmartMail AI
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Smarter Inbox. Faster Decisions.
        </p>

        <form className="space-y-5 mt-8">

          <Input
            type="email"
            placeholder="Enter Email"
          />

          <Input
            type="password"
            placeholder="Enter Password"
          />

          <Button text="Login" />

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-2 font-semibold"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;