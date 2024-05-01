import React from "react";
import Slider from "react-slick";
import projectsData from "../../constant/hardcode";

function PauseOnHover() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };


  return (
    <div className="slider-container">
      <Slider {...settings} className="mobRes">
          {projectsData.map((el, index) => {
            return (
              <div className="projectBlock" key={index}>
                <a target="blank" href="https://github.com/">
                  <img
                    src={el.image}
                    alt="projectImgs"
                    className="projectImgs"
                  />
                  <p className="projectTitle">{el.title}</p>
                  <p className="projectDesc">{el.description}</p>
                </a>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default PauseOnHover;
