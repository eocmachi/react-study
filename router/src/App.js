import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Works from "./pages/Works";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import Home from "./pages/Home";
import WorksDetail from "./pages/WorksDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/works", element: <Works /> },
      { path: "/works/:worksId", element: <WorksDetail /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
