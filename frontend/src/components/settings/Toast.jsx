function Toast({
          message,
          type = "success",
        }) {
          if (!message) return null;
        
          const isSuccess = type === "success";
        
          return (
            <div className="fixed right-8 top-8 z-[100]">
        
              <div
                className={`rounded-2xl border px-6 py-4 shadow-2xl backdrop-blur-xl ${
                  isSuccess
                    ? "border-green-400/30 bg-green-500/15"
                    : "border-red-400/30 bg-red-500/15"
                }`}
              >
        
                <div className="flex items-center gap-3">
        
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      isSuccess
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {isSuccess ? "✓" : "✕"}
                  </div>
        
                  <div>
        
                    <p
                      className={`font-semibold ${
                        isSuccess
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {isSuccess ? "Success" : "Error"}
                    </p>
        
                    <p className="text-sm text-slate-300">
                      {message}
                    </p>
        
                  </div>
        
                </div>
        
              </div>
        
            </div>
          );
        }
        
        export default Toast;