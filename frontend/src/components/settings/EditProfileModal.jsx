function EditProfileModal({
          showModal,
          setShowModal,
          username,
          setUsername,
          email,
          setEmail,
          handleUpdateProfile,
        }) {
          if (!showModal) return null;
        
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        
              <div className="w-full max-w-md rounded-3xl border border-cyan-400/20 bg-slate-900 p-8 shadow-2xl">
        
                <h2 className="mb-6 text-2xl font-bold text-white">
                  Edit Profile
                </h2>
        
                <div className="space-y-5">
        
                  {/* Username */}
        
                  <div>
        
                    <label className="mb-2 block text-sm text-slate-400">
                      Username
                    </label>
        
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                    />
        
                  </div>
        
                  {/* Email */}
        
                  <div>
        
                    <label className="mb-2 block text-sm text-slate-400">
                      Email
                    </label>
        
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                    />
        
                  </div>
        
                </div>
        
                {/* Buttons */}
        
                <div className="mt-8 flex justify-end gap-3">
        
                  <button
                    onClick={() => setShowModal(false)}
                    className="rounded-xl bg-slate-700 px-5 py-3 text-white transition hover:bg-slate-600"
                  >
                    Cancel
                  </button>
        
                  <button
                    onClick={handleUpdateProfile}
                    className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Save Changes
                  </button>
        
                </div>
        
              </div>
        
            </div>
          );
        }
        
        export default EditProfileModal;