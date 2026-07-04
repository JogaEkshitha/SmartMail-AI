import { useEffect, useState } from "react";
import api from "../services/api";

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [unread, setUnread] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const response = await api.get("notifications/");

      setNotifications(response.data.notifications);
      setUnread(response.data.unread);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
          fetchNotifications();
        
          const interval = setInterval(() => {
            fetchNotifications();
          }, 10000);
        
          const updateNotifications = () => {
            fetchNotifications();
          };
        
          window.addEventListener(
            "notificationUpdated",
            updateNotifications
          );
        
          return () => {
            clearInterval(interval);
        
            window.removeEventListener(
              "notificationUpdated",
              updateNotifications
            );
          };
        }, []);

  return {
    notifications,
    unread,
    loading,
    refreshNotifications: fetchNotifications,
  };
};

export default useNotifications;