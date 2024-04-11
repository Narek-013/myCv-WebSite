import { Link } from "react-router-dom";
import { images } from "../../Images/Images";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { selectMyCv } from "../../store/slices/myCvSlices";
import {useSelector} from "react-redux"

const NavMobile = () => {
   
   const { aboutScroll, contactScroll ,projectScroll} = useSelector(selectMyCv);
   const [isOpen, setOpen] = useState(false);

   const changeScroll = (n) => {
     window.scrollTo({ behavior: "smooth", top: n - 84 });
     setOpen(false)
   };

   
    return (
      <nav className="navPanel mobile">
        <img
          src={images.logo}
          alt="Logo"
          className="logoImg"
          onClick={() => changeScroll(0)}
        />
        <div className="burgerBlock">
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <div className="locationBurg">
              <Link onClick={() => changeScroll(0)}>Home</Link>
              <Link onClick={() => changeScroll(aboutScroll)}>About</Link>
              <Link onClick={() => changeScroll(projectScroll)}>Projects</Link>
              <Link onClick={() => changeScroll(contactScroll)}>Contact</Link>
            </div>
          )}
        </div>
      </nav>
    );
}

export default NavMobile;
