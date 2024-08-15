// import { Outlet } from "react-router-dom";
import Navbar from "./components/Home/Navbar.jsx";
import Home from "./components/Home/Home.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Outlet /> */}
    </>
  );
}

export default Layout;
