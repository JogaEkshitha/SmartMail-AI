import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import Button from "../common/Button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goHome = () => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (sectionId) => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl shadow-2xl shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            onClick={goHome}
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl">
              <Sparkles className="h-5 w-5 text-cyan-400" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                SmartMail AI
              </h2>

              <p className="text-xs text-slate-400">
                AI Email Assistant
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-2xl lg:flex">

            <button
              onClick={goHome}
              className="rounded-full bg-cyan-500/15 px-5 py-2 text-sm font-medium text-cyan-400 transition"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick("features")}
              className="rounded-full px-5 py-2 text-sm font-medium text-slate-200 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              Features
            </button>

            <Link
              to="/login"
              className="rounded-full px-5 py-2 text-sm font-medium text-slate-200 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              Sign In
            </Link>

          </nav>

          {/* CTA */}

          <div className="hidden lg:block">
            <Link to="/signup">
              <Button>
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:border-cyan-400/30 hover:text-cyan-400 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[500px] border-t border-white/10"
            : "max-h-0"
        }`}
      >
        <div className="bg-slate-950/90 px-6 py-6 backdrop-blur-3xl">

          <nav className="space-y-2">

            <button
              onClick={goHome}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick("features")}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              Features
            </button>

            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              Sign In
            </Link>

          </nav>

          <div className="mt-6">

            <Link
              to="/signup"
              onClick={() => setMobileOpen(false)}
            >
              <Button className="w-full">
                Get Started
              </Button>
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;