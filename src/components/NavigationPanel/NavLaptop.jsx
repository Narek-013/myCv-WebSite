import { Link } from "react-router-dom";
import { images } from "../../Images/Images";
import { selectMyCv } from "../../store/slices/myCvSlices";
import { useSelector } from "react-redux";
import { useRef } from "react";


const NavLaptop = () => {

  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

 const { aboutScroll, contactScroll ,projectScroll} = useSelector(selectMyCv);

 const changeScroll = (n) => {
   window.scrollTo({ behavior: "smooth", top: n - 81});
 };


  return (
    <nav className="navPanel laptop">
      <img
        src={images.logo}
        alt="Logo"
        className="logoImg"
        onClick={() => changeScroll(0)}
      />
      <div className="myPagesBlock buttons">
        <Link className="draw" ref={home} onClick={() => changeScroll(0)}>
          Home
        </Link>
        <Link className="draw" ref={about} onClick={() => changeScroll(aboutScroll)}>
          About
        </Link>
        <Link className="draw" ref={project} onClick={() => changeScroll(projectScroll)}>
          Projects
        </Link>
        <Link className="draw" ref={contact} onClick={() => changeScroll(contactScroll)}>
          Contact
        </Link>
      
      </div>
    </nav>
  );
};

export default NavLaptop;
