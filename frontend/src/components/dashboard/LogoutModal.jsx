import { LogOut } from "lucide-react";

function LogoutModal({
  show,
  onCancel,
  onConfirm,
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl border border-red-500/20 bg-slate-900 p-8 shadow-2xl">

        {/* Icon */}

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15">

          <LogOut className="h-8 w-8 text-red-400" />

        </div>

        {/* Heading */}

        <h2 className="mt-6 text-center text-2xl font-bold text-white">
          Logout
        </h2>

        <p className="mt-3 text-center leading-7 text-slate-400">
          Are you sure you want to logout from
          <br />
          <span className="font-semibold text-white">
            SmartMail AI
          </span>
          ?
        </p>

        {/* Buttons */}

        <div className="mt-8 flex justify-center gap-4">

          <button
            onClick={onCancel}
            className="rounded-xl border border-white/10 bg-slate-700 px-6 py-3 text-white transition hover:bg-slate-600"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default LogoutModal;