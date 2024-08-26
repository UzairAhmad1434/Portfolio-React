import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About/About";
import Contact from "./components/ContactMe/Contact";
import Service from "./components/Services/Service.jsx";
import Project from "./components/Project/Project";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MySkill from "./components/Skills/MySkill.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<MySkill />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Project" element={<Project />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
