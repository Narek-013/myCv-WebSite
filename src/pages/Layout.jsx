import { Outlet } from "react-router-dom";
import NavigationPanel from "../components/NavigationPanel/NavigationPanel";
import Footer from "../components/Footer/Footer";
import LightDark from "../components/Light/DarkMode";
import { useRef } from "react";
import './layout.css'

const Layout = () => {

    const darkLight = useRef(null)

    return (
      <div ref={darkLight}>
        <NavigationPanel />
        <div className="container">
          <Outlet />
        </div>
        <LightDark darkLight={darkLight} />
        <Footer />
      </div>
    );
}

export default Layout;
