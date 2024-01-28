import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./components/HomePage"; 
import About from "./components/About.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/custom.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage />, index: true }, 
      { path: "about", element: <About /> }
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
