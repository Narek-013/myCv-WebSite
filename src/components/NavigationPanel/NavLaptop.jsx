import { Link } from "react-router-dom";
import { images } from "../../Images/Images";
import { addLikeCount, addLikeCounts, changeActiveUs, selectMyCv } from "../../store/slices/myCvSlices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

const NavLaptop = ({ light }) => {
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const disptach = useDispatch()

  const { aboutScroll, contactScroll, projectScroll, likesCounts } =
    useSelector(selectMyCv);

  const changeScroll = (n) => {
    window.scrollTo({ behavior: "smooth", top: n - 114 });
  };

  const addCount = () => {
    localStorage.setItem("activeLike", likesCounts.likes + 1);
    disptach(addLikeCount());
  };

  const removeLike = () => {
    localStorage.removeItem("activeLike");
    disptach(addLikeCounts());
  }

  useEffect(() => {
    let x = localStorage.getItem("activeLike")
    if(x === null) {
      // console.log(128);
    }else{
      disptach(addLikeCount());
    }
  }, []);

  return (
    <nav className="navPanel laptop">
      {!light && (
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-40 w-60 z-0 blur-lg absolute  transform -translate-x-1/2 -translate-1/2 "></div>
      )}
      <img
        src={light ? images.myCvDark : images.myCvLight}
        alt="Logo"
        className={"logoImg"}
        onClick={() => changeScroll(0)}
      />
      <div className="myPagesBlock buttons">
        <Link className="draw" ref={home} onClick={() => changeScroll(0)}>
          Home
        </Link>
        <Link
          className="draw"
          ref={about}
          onClick={() => changeScroll(aboutScroll)}
        >
          About
        </Link>
        <Link
          className="draw"
          ref={project}
          onClick={() => changeScroll(projectScroll)}
        >
          Projects
        </Link>
        <Link
          className="draw"
          ref={contact}
          onClick={() => changeScroll(contactScroll)}
        >
          Contact
        </Link>
        {likesCounts.activeUser ? <BiLike className="likeBtn" onClick={addCount} /> : <BiSolidLike className="likeBtn" onClick={removeLike}/>}
      </div>
    </nav>
  );
};

export default NavLaptop;
