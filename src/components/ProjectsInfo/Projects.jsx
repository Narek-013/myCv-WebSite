import AllWeb from "./AllWeb";
import { useDispatch } from "react-redux";
import './projectInfo.css'
import { getProjectScroll } from "../../store/slices/myCvSlices";
import { useEffect, useRef } from "react";
import PauseOnHover from "./AllWebs";


const ProjectsSection = () => {
 
   const dispatch = useDispatch();
   const projectRef = useRef(null);

   useEffect(() => {
     dispatch(getProjectScroll(projectRef?.current?.offsetTop));
   }, []);

  return (
    <section className="projects" ref={projectRef}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 lights">
        My Projects
      </h2>
      <AllWeb/>
      <PauseOnHover/>
    </section>
  );
};

export default ProjectsSection;
