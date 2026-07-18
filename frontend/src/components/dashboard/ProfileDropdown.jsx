import {
          UserCircle2,
          Settings,
          LogOut,
        } from "lucide-react";
        
        import { useNavigate } from "react-router-dom";
        
        function ProfileDropdown({
          profile,
          onLogout,
          onClose,
        }) {
          const navigate = useNavigate();
        
          return (
            <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900 shadow-2xl backdrop-blur-xl">
        
              {/* Header */}
        
              <div className="border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5">
        
                <div className="flex items-center gap-4">
        
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
        
                    <UserCircle2 className="h-9 w-9 text-cyan-400" />
        
                  </div>
        
                  <div>
        
                    <p className="font-semibold text-white">
                      {profile?.username || "User"}
                    </p>
        
                    <p className="text-sm text-slate-400">
                      {profile?.email || "No Email"}
                    </p>
        
                  </div>
        
                </div>
        
              </div>
        
              {/* Menu */}
        
              <div className="py-2">
        
                <button
                  onClick={() => {
                    navigate("/dashboard/settings");
                    onClose();
                  }}
                  className="flex w-full items-center gap-3 px-5 py-4 text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
                >
        
                  <Settings className="h-5 w-5" />
        
                  Account Settings
        
                </button>
        
              </div>
        
              {/* Logout */}
        
              <div className="border-t border-white/10">
        
                <button
                  onClick={() => {
                    onClose();
                    onLogout();
                  }}
                  className="flex w-full items-center gap-3 px-5 py-4 text-red-400 transition hover:bg-red-500/10"
                >
        
                  <LogOut className="h-5 w-5" />
        
                  Logout
        
                </button>
        
              </div>
        
            </div>
          );
        }
        
        export default ProfileDropdown;