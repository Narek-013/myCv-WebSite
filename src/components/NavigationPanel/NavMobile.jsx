import { Link } from "react-router-dom";
import { images } from "../../Images/Images";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { addLikeCount, addLikeCounts, selectMyCv } from "../../store/slices/myCvSlices";
import {useDispatch, useSelector} from "react-redux";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

const NavMobile = ({light}) => {
   
  const dispatch = useDispatch()
   const { aboutScroll, contactScroll, projectScroll, likesCounts } =
     useSelector(selectMyCv);
   const [isOpen, setOpen] = useState(false);

   const changeScroll = (n) => {
     window.scrollTo({ behavior: "smooth", top: n - 84 });
     setOpen(false)
   };

   const addCount = () => {
     localStorage.setItem("activeLike", likesCounts.likes + 1);
     dispatch(addLikeCount());
     setOpen(false);
   };

   const removeLike = () => {
     localStorage.removeItem("activeLike");
     dispatch(addLikeCounts());
     setOpen(false);
   };

   
    return (
      <nav className="navPanel mobile">
        <img
          src={light ? images.myCvLight : images.myCvDark}
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
              {likesCounts.activeUser ? <BiLike className="likeBtn" onClick={addCount} /> : <BiSolidLike className="likeBtn" onClick={removeLike}/>}
            </div>
          )}
        </div>
      </nav>
    );
}

export default NavMobile;
