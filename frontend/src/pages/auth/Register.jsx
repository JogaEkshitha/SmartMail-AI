import { Link } from "react-router-dom";
import Button from "../../components/ common/Button";
import Input from "../../components/ common/Input";

function Register() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10">

        <h1 className="text-4xl font-bold text-blue-600 text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join SmartMail AI
        </p>

        <form className="space-y-5 mt-8">

          <Input
            type="text"
            placeholder="Full Name"
          />

          <Input
            type="email"
            placeholder="Email"
          />

          <Input
            type="password"
            placeholder="Password"
          />

          <Button text="Register" />

        </form>

        <p className="text-center mt-6">
          Already have an account?

          <Link
            to="/"
            className="text-blue-600 ml-2 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;