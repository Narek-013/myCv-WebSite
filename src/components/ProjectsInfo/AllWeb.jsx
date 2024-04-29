import projectsData from "../../constant/hardcode";

const AllWeb = () => {

  return (
      <div className="projectsIn">
        {projectsData.map((el, index) => {
          return (
            <div className="projectBlock" key={index}>
              <img src={el.image} alt="projectImgs" className="projectImgs" />
              <p className="projectTitle">{el.title}</p>
              <p className="projectDesc">{el.description}</p>
            </div>
          );
        })}
      </div>
  );
};

export default AllWeb;
