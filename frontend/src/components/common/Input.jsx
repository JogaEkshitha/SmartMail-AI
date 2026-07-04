import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Input({
  label,
  error,
  icon,
  id,
  type = "text",
  className = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-semibold text-slate-300"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-4 text-slate-400 pointer-events-none">
            {icon}
          </div>
        )}

        <input
          id={id}
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          className={`
            w-full
            rounded-xl
            border
            bg-white
            text-slate-800
            placeholder:text-slate-400
            transition-all
            duration-200
            outline-none

            ${icon ? "pl-11" : "pl-4"}
            ${isPassword ? "pr-12" : "pr-4"}
            py-3

            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                : "border-slate-200 hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            }

            ${className}
          `}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-slate-500 hover:text-slate-700 transition"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;