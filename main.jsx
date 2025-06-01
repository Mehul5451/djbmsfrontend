import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageApp from "./src/Pages/homepage";
import AboutApp from "./src/Pages/AboutUs";
import BrouseApp from "./src/Pages/brouse";
import ContactApp from "./src/Pages/ContactUs";
import EventApp from "./src/Pages/EventPage";
import Registration from "./src/Pages/Registrationpage";
import LoginPage from "./src/Pages/Loginpage";
import AdminPanel from "./src/Pages/Admin";
import UserDashboard from "./src/Pages/UserDashboard";  
import ProtectedRoute from "./src/components/AdminAuth";
import AdminLogin from "./src/components/signup/AdminLogin";
import AuthRoute from "./src/components/Authroot";  // Custom Route for User Authentication

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageApp />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/aboutus",
    element: <AboutApp />,
  },
  {
    path: "/contactus",
    element: <ContactApp />,
  },
  {
    path: "/event",
    element: <EventApp />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminPanel />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-dashboard",
    element: (
      <AuthRoute>
        <UserDashboard /> {/* Protected User Dashboard */}
      </AuthRoute>
    ),
  },
  {
    path: "/brousedj",
    element: (
      <AuthRoute>
        <BrouseApp /> {/* Protected Brouse App */}
      </AuthRoute>
    ),
  },
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>, // Page Not Found handler
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
