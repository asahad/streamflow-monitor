import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./components/HomePage"; // Import HomePage
import About from "./components/About.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/custom.css";

// Create a router with routes, including HomePage as the default child of App
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App as the layout component
    children: [
      { path: "/", element: <HomePage />, index: true }, // HomePage as the index route
      { path: "about", element: <About /> }, // About page as a child route
      // Add more routes as needed
    ],
  },
]);

// Render the RouterProvider with the router configuration
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
