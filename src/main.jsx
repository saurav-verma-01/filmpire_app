import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Movies from "./component/Movies.jsx";
import Actors from "./component/Actors.jsx";
import MovieInfo from "./component/MovieInfo.jsx";
import Profile from "./component/Profile.jsx";
import ErrorPage from "./component/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Movies />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/actors/:id",
        element: <Actors />,
      },
      {
        path: "/MovieInfo/:id",
        element: <MovieInfo />,
      },
      {
        path: "/Profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
