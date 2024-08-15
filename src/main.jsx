import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About/About";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Home" element={<Layout />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
