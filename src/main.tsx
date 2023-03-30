import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Profile from "./Components/Profile/Profile";
import UserNationality from "./Components/UserNationality/UserNationality";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile />,
  },
  {
    path: "/user",
    element: <UserNationality />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
   
      <RouterProvider router={router} />

  </React.StrictMode>
);
