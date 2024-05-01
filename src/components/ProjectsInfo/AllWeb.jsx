import projectsData from "../../constant/hardcode";

const AllWeb = () => {

  return (
    <div className="projectsIn">
      {projectsData.map((el, index) => {
        return (
          <div className="projectBlock" key={index}>
            <a target="blank" href="https://github.com/">
              <img src={el.image} alt="projectImgs" className="projectImgs" />
              <p className="projectTitle">{el.title}</p>
              <p className="projectDesc">{el.description}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default AllWeb;
