import { Outlet } from "react-router-dom";
import NavigationPanel from "../components/NavigationPanel/NavigationPanel";
import Footer from "../components/Footer/Footer";
import LightDark from "../components/Light/DarkMode";
import { useEffect, useRef, useState } from "react";
import './layout.css'

const Layout = () => {

    const darkLight = useRef(null)
    const [mobIcon,setMobIcon] = useState(false)

    useEffect(() => {
      const x = window.screen.width
      if(x <= 768) {
        console.log(window.screen.width);
        setMobIcon(!mobIcon)
      }
    },[])

    return (
      <div ref={darkLight}>
        <NavigationPanel darkLight={darkLight} />
        <div className="container">
          <Outlet />
        </div>
       {mobIcon && <LightDark darkLight={darkLight} mobIcon={mobIcon} />}
        <Footer />
      </div>
    );
}

export default Layout;
