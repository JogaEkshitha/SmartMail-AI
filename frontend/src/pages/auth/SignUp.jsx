import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import api from "../../services/api";

const SignUp = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !email ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await api.post("accounts/register/", {
        full_name: fullName,
        email,
        username,
        password,
      });

      toast.success("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      console.error(error);

      if (error.response?.data) {
        const errors = Object.values(error.response.data)
          .flat()
          .join("\n");

        toast.error(errors);
      } else {
        toast.error("Registration failed.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32">

        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -right-24 top-36 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center justify-center px-6 py-16 lg:px-8">

          <div className="w-full max-w-md">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-3xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_30px_80px_rgba(6,182,212,0.12)]">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                  <Sparkles className="h-8 w-8 text-cyan-400" />
                </div>

                <h2 className="mt-4 text-xl font-bold text-white">
                  SmartMail AI
                </h2>

                <h1 className="mt-6 text-4xl font-black tracking-tight text-white">
                  Create Account
                </h1>

                <p className="mt-4 text-base leading-7 text-slate-400">
                  Create your SmartMail AI account and get started.
                </p>

              </div>

              <form
                onSubmit={handleRegister}
                className="mt-10 space-y-7"
              >

                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Username"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <Input
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Button
                  type="submit"
                  className="w-full justify-center"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>

              </form>

              <div className="mt-8 text-center">

                <p className="text-sm text-slate-400">
                  Already have an account?{" "}

                  <Link
                    to="/login"
                    className="font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    Sign In
                  </Link>

                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
};

export default SignUp;