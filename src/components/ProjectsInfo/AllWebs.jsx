import { images } from "../../Images/Images";
import React, { Component } from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";

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

   const projectsData = [
     {
       id: 1,
       title: "React Portfolio Website",
       description: "Project 1 description",
       image: images.projectsImg.prImg1,
       tag: ["All", "Web"],
       gitUrl: "/",
       previewUrl: "/",
     },
     {
       id: 2,
       title: "Potography Portfolio Website",
       description: "Project 2 description",
       image: images.projectsImg.prImg2,
       tag: ["All", "Web"],
       gitUrl: "/",
       previewUrl: "/",
     },
     {
       id: 3,
       title: "E-commerce Application",
       description: "Project 3 description",
       image: images.projectsImg.prImg3,
       tag: ["All", "Web"],
       gitUrl: "/",
       previewUrl: "/",
     },
     {
       id: 4,
       title: "Food Ordering Application",
       description: "Project 4 description",
       image: images.projectsImg.prImg4,
       tag: ["All", "Mobile"],
       gitUrl: "/",
       previewUrl: "/",
     },
     {
       id: 5,
       title: "React Firebase Template",
       description: "Authentication and CRUD operations",
       image: images.projectsImg.prImg5,
       tag: ["All", "Web"],
       gitUrl: "/",
       previewUrl: "/",
     },
     {
       id: 6,
       title: "Full-stack Roadmap",
       description: "Project 5 description",
       image: images.projectsImg.prImg6,
       tag: ["All", "Web"],
       gitUrl: "/",
       previewUrl: "/",
     },
     {
       id: 7,
       title: "Food List",
       description: "Project 7 description",
       image: images.projectsImg.foodList,
       tag: ["All", "Web"],
       gitUrl: "/",
       previewUrl: "/",
     },
     {
       id: 8,
       title: "ToDo Lists",
       description: "Project 8 description",
       image: images.projectsImg.toDoList,
       tag: ["All", "Web"],
       gitUrl: "/",
       previewUrl: "/",
     },
   ];


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
                </a>

                <p className="projectTitle">{el.title}</p>
                <p className="projectDesc">{el.description}</p>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default PauseOnHover;
