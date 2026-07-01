function Card({
          children,
          className = "",
          hoverEffect = false,
        }) {
          return (
            <div
              className={`
                bg-white
                rounded-2xl
                border
                border-slate-200
                shadow-sm
                transition-all
                duration-300
                ${
                  hoverEffect
                    ? "hover:shadow-xl hover:-translate-y-1 hover:border-blue-200"
                    : ""
                }
                ${className}
              `}
            >
              {children}
            </div>
          );
        }
        
        function Badge({
          children,
          variant = "primary",
          className = "",
        }) {
          const variants = {
            primary:
              "bg-blue-100 text-blue-700",
        
            success:
              "bg-green-100 text-green-700",
        
            warning:
              "bg-yellow-100 text-yellow-700",
        
            danger:
              "bg-red-100 text-red-700",
        
            neutral:
              "bg-slate-100 text-slate-700",
          };
        
          return (
            <span
              className={`
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                ${variants[variant]}
                ${className}
              `}
            >
              {children}
            </span>
          );
        }
        
        export { Card, Badge };