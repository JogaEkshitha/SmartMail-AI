import { Loader2 } from "lucide-react";

function Button({
 children,
 text,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon,
  iconPosition = "left",
  type = "button",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-95";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow hover:shadow-lg",

    secondary:
      "bg-blue-50 hover:bg-blue-100 text-blue-600",

    outline:
      "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",

    ghost:
      "hover:bg-gray-100 text-gray-600",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm gap-2",

    md: "px-5 py-3 text-sm gap-2",

    lg: "px-7 py-4 text-base gap-3 rounded-2xl",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          {icon && iconPosition === "left" && icon}

          <span>{children || text}</span>
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
}

export default Button;