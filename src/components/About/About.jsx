import { images } from "../../Images/Images";
import {NavLink, Outlet } from "react-router-dom";
import './aboutPage.css';
import { useEffect, useRef } from "react";
import { getAboutScroll } from "../../store/slices/myCvSlices";
import {useDispatch} from "react-redux"

const About = () => {
  
  const dispatch = useDispatch()
  const aboutRef = useRef(null)

  useEffect(() => {
    dispatch(getAboutScroll(aboutRef?.current?.offsetTop));
  },[])
  
  

  return (
    <div className="aboutPage" ref={aboutRef}>
      <img src={images.aboutImg} alt="#" />
      <div className="aboutInfo">
        <h3>About Me</h3>
        <p>
          I am a Frontend Developer with a passion for creating interactive and
          responsive web applications. I have experience working with
          JavaScript, React, Redux, Redux/Toolkit, HTML, CSS, and Git. I am a
          quick learner and I am always looking to expand my knowledge and skill
          set. I am a team player and I am excited to work with others to create
          amazing applications.
        </p>
        <div className="skillsBlock">
          <NavLink className="draw" to="/">
            Skills
          </NavLink>
          <NavLink className="draw" to="/education">
            Education
          </NavLink>
          <NavLink className="draw" to="/certificaions">
            Certifications
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default About;
