import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import toast from "react-hot-toast";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import api from "../../services/api";

const SignIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please enter username and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("accounts/login/", {
        username,
        password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      toast.success("Welcome back!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 800);

    } catch (error) {
      console.error(error);

      if (error.response?.data?.detail) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Invalid username or password.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32">

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -right-24 top-36 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center justify-center px-6 py-16 lg:px-8">

          <div className="w-full max-w-md">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-3xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_30px_80px_rgba(6,182,212,0.12)]">

              {/* Logo */}

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                  <Sparkles className="h-8 w-8 text-cyan-400" />
                </div>

                <h2 className="mt-4 text-xl font-bold text-white">
                  SmartMail AI
                </h2>

                <h1 className="mt-6 text-4xl font-black tracking-tight text-white">
                  Welcome Back
                </h1>

                <p className="mt-4 text-base leading-7 text-slate-400">
                  Sign in to continue to SmartMail AI
                </p>

              </div>

              {/* Form */}

              <form
                onSubmit={handleLogin}
                className="mt-10 space-y-7"
              >

                <Input
                  label="Username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  type="submit"
                  className="w-full justify-center"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>

              </form>

              <div className="mt-8 text-center">

                <p className="text-sm text-slate-400">
                  Don't have an account?{" "}

                  <Link
                    to="/signup"
                    className="font-medium text-cyan-400 transition hover:text-cyan-300"
                  >
                    Sign Up
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

export default SignIn;