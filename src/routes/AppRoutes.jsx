import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Documents from "../pages/Documents";
import DocumentDetails from "../pages/DocumentDetails";
import Interviews from "../pages/Interviews";
import InterviewDetails from "../pages/InterviewDetails";
import Photographs from "../pages/Photographs";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

// Layout
import Layout from "../components/layout/Layout";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/documents", element: <Documents /> },
      { path: "/documents/:id", element: <DocumentDetails /> },
      { path: "/interviews", element: <Interviews /> },
      { path: "/interviews/:id", element: <InterviewDetails /> },
      { path: "/photographs", element: <Photographs /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default AppRoutes;
