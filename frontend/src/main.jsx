import React from "react";
import ReactDOM from "react-dom/client";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import react-router-dom v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import components routes
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import Landing from "./Routes/Landing";
import Litters from "./Routes/Landing/Litters";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import Forgot from "./Routes/Forgot";
import ChangePass from "./Routes/ChangePass";

//implement routes with react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/litters",
    element: <Litters />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/changepass",
    element: <ChangePass />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
