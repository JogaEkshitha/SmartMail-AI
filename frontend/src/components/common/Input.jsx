function Input({
          label,
          error,
          icon,
          id,
          type = "text",
          className = "",
          ...props
        }) {
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
                  type={type}
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
                    pr-4
                    py-3
        
                    ${
                      error
                        ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                        : "border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    }
        
                    ${className}
                  `}
                  {...props}
                />
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
        