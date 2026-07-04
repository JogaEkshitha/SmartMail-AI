import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#111827",
            color: "#fff",
            border: "1px solid rgba(34,211,238,0.2)",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <AppRoutes />
    </SearchProvider>
  );
}

export default App;