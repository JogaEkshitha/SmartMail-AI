import React from "react";
import { Bell, CheckCheck } from "lucide-react";
import api from "../../services/api";

const NotificationDropdown = ({
  notifications,
  unread,
  refreshNotifications,
  onClose,
}) => {
  const markAllAsRead = async () => {
    try {
      await api.patch("notifications/read-all/");

      refreshNotifications();
    } catch (error) {
      console.error(error);
    }
  };

  const markAsRead = async (id) => {
    try {
      await api.patch(`notifications/read/${id}/`);

      refreshNotifications();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="
        absolute
        right-0
        top-16
        z-50
        w-96
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/95
        backdrop-blur-3xl
        shadow-2xl
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-5">

        <div className="flex items-center gap-3">

          <Bell className="h-6 w-6 text-cyan-400" />

          <div>

            <h2 className="font-bold text-white">
              Notifications
            </h2>

            <p className="text-xs text-slate-400">
              {unread} unread
            </p>

          </div>

        </div>

        <button
          onClick={markAllAsRead}
          className="rounded-xl bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-400 transition hover:bg-cyan-500/20"
        >
          <CheckCheck className="mr-1 inline h-4 w-4" />
          Mark All
        </button>

      </div>

      {/* Body */}

      <div className="max-h-[450px] overflow-y-auto">

        {notifications.length === 0 ? (
          <div className="p-10 text-center text-slate-400">
            No notifications
          </div>
        ) : (
          notifications.map((item) => (
            <button
              key={item.id}
              onClick={() => markAsRead(item.id)}
              className={`
                w-full
                border-b
                border-white/5
                p-5
                text-left
                transition
                hover:bg-cyan-500/10
                ${
                  !item.is_read
                    ? "bg-cyan-500/5"
                    : ""
                }
              `}
            >
              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                {!item.is_read && (
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                )}

              </div>

              <p className="mt-2 text-sm text-slate-400">
                {item.message}
              </p>

              <p className="mt-3 text-xs text-slate-500">
                {new Date(item.created_at).toLocaleString(
                  "en-IN",
                  {
                    day: "2-digit",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }
                )}
              </p>

            </button>
          ))
        )}

      </div>
    </div>
  );
};

export default NotificationDropdown;