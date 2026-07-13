import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

import Dashboard from "../pages/dashboard/Dashboard";
import Inbox from "../pages/dashboard/Inbox";
import EmailDetail from "../pages/dashboard/EmailDetail";
import Sent from "../pages/dashboard/Sent";
import Summary from "../pages/dashboard/Summary";
import Spam from "../pages/dashboard/Spam";
import Priority from "../pages/dashboard/Priority";
import Categories from "../pages/dashboard/Categories";
import Analytics from "../pages/dashboard/Analytics";
import Settings from "../pages/dashboard/Settings";

import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Guest Routes */}

        <Route
          path="/"
          element={<Home />}
          
        />

        <Route
          path="/login"
          element={
            <GuestRoute>
              <SignIn />
            </GuestRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <GuestRoute>
              <SignUp />
            </GuestRoute>
          }
        />

        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/inbox"
          element={
            <ProtectedRoute>
              <Inbox />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/inbox/:id"
          element={
            <ProtectedRoute>
              <EmailDetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/sent"
          element={
            <ProtectedRoute>
              <Sent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/summary"
          element={
            <ProtectedRoute>
              <Summary />
            </ProtectedRoute>
          }
        />

       <Route
        path="/dashboard/spam"
        element={
        <ProtectedRoute>
        <Spam />
        </ProtectedRoute>
      }
   />

        <Route
          path="/dashboard/priority"
          element={
            <ProtectedRoute>
              <Priority />
            </ProtectedRoute>
          }
        />

        <Route
         path="/dashboard/categories"
         element={
        <ProtectedRoute>
        <Categories />
       </ProtectedRoute>
     }
  />
      <Route
       path="/dashboard/analytics"
       element={
      <ProtectedRoute>
      <Analytics />
      </ProtectedRoute>
    }
 />
        <Route
  path="/dashboard/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;