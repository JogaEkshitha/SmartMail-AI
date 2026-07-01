import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import api from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log({
      username,
      password,
    });
      const response = await api.post("accounts/login/", {
        username,
        password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      console.log("Full Error:", error);
      console.log("Response:", error.response);
    
      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          SmartMail AI
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Smarter Inbox. Faster Decisions.
        </p>

        <form onSubmit={handleLogin} className="space-y-5 mt-8">

          <Input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button text="Login" type="submit" />

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