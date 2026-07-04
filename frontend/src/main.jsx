import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 3000,

        style: {
          background: "#0f172a",
          color: "#ffffff",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "14px 18px",
          fontSize: "14px",
          fontWeight: "500",
        },

        success: {
          iconTheme: {
            primary: "#06b6d4",
            secondary: "#ffffff",
          },
        },

        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#ffffff",
          },
        },
      }}
    />
  </StrictMode>
);