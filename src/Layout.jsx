import { Outlet } from "react-router-dom";
import Navbar from "./components/Home/Navbar.jsx";
// import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
