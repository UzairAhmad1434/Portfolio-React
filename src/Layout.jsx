import Navbar from "./components/Home/Navbar.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/ContactMe/Contact.jsx";
import Service from "./components/Services/Service.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MySkill from "./components/Skills/MySkill.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <MySkill />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default Layout;
