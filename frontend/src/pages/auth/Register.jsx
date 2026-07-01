import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const Register = () => {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -right-24 top-36 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center justify-center px-6 py-16 lg:px-8">
          <div className="w-full max-w-md">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-3xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_30px_80px_rgba(6,182,212,0.12)] sm:p-10">
              {/* Logo */}
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl">
                  <Sparkles className="h-8 w-8 text-cyan-400" />
                </div>

                <h2 className="mt-4 text-xl font-bold text-white">
                  SmartMail AI
                </h2>

                <h1 className="mt-6 text-4xl font-black tracking-tight text-white">
                  Create Account
                </h1>

                <p className="mt-4 text-base leading-7 text-slate-400">
                  Join SmartMail AI and get started.
                </p>
              </div>

              {/* Form */}
              <form className="mt-10 space-y-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                />

                <Input
                  label="Username"
                  type="text"
                  placeholder="Choose a username"
                />

                <Input
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center"
                >
                  Register
                </Button>
              </form>

              {/* Footer Text */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-cyan-400 transition-colors duration-200 hover:text-cyan-300"
                  >
                    Login
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

export default Register;