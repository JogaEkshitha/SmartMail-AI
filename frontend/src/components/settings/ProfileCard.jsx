import { UserCircle2, Pencil } from "lucide-react";

function ProfileCard({
  profile,
  onEdit,
}) {
  return (
    <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-3xl">

      <div className="mb-6 flex items-center gap-3">

        <UserCircle2 className="h-7 w-7 text-cyan-400" />

        <h2 className="text-xl font-semibold text-white">
          Profile
        </h2>

      </div>

      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-6">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20">

            <UserCircle2 className="h-16 w-16 text-cyan-400" />

          </div>

          <div>

            <p className="text-2xl font-bold text-white">
              {profile?.username || "User"}
            </p>

            <p className="mt-1 text-slate-400">
              {profile?.email || "Loading..."}
            </p>

          </div>

        </div>

        <button
          onClick={onEdit}
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >

          <Pencil className="h-5 w-5" />

          Edit Profile

        </button>

      </div>

    </div>
  );
}

export default ProfileCard;