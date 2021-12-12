import React, { useState, useEffect, useRef } from "react";
import ProjectTemplate from "./ProjectTemplate";

const Projects = (props) => {
  const geo = props.geo;
  const kotaclj = props.kotaclj;

  const targetRef = useRef(null);

  const [ProjectsIsInViewport, setProjectsIsInViewport] = useState(false);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    setProjectsIsInViewport(entry.intersectionRatio > 0.2);
  };
  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 0.3,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
  }, [targetRef, options]);

  return (
    <section
      className="container pt-md-5 position-relative"
      id="myprojects"
      ref={targetRef}
    >
      <div className="triangel2 ">
        {" "}
        <img src={props.trokut} />
      </div>
      <div className="container pt-3 pb-2">
        <h2
          className="aboutme"
          style={
            ProjectsIsInViewport
              ? {
                  animationName: "pageloadhi",
                  animationFillMode: "forwards",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationIterationCount: "1",
                }
              : {}
          }
        >
          <b className="bold">my</b> pr
          <img src={kotaclj} className="kotaclj" />
          jects
        </h2>
      </div>
      <div className="container projectcontainer position-relative pt-1">
        <div className="row g-0 h-100 w-100 ">
          <div
            className="col-6 col-md-3 d-flex justify-content-center project"
            style={
              ProjectsIsInViewport
                ? {
                    animationName: "pageloadhi",
                    animationFillMode: "forwards",
                    animationDuration: "1s",
                    animationDelay: "0.4s",
                    animationIterationCount: "1",
                  }
                : {}
            }
          >
            <ProjectTemplate
              projectName={"online shopping app"}
              projectStack={"fullstack"}
              projectTechnologies={[
                "javascript",
                <br />,
                "php",
                <br />,
                "mysql",
              ]}
              projectLink={
                "https://github.com/dzuburjasmin/online-shopping-app"
              }
              projectImage={props.shoppingimg}
            />
          </div>

          <div
            className="col-6  col-md-3 d-flex justify-content-center project"
            style={
              ProjectsIsInViewport
                ? {
                    animationName: "pageloadhi",
                    animationFillMode: "forwards",
                    animationDuration: "1s",
                    animationDelay: "0.5s",
                    animationIterationCount: "1",
                  }
                : {}
            }
          >
            <ProjectTemplate
              projectName={["my music playlist app"]}
              projectStack={"fullstack"}
              projectTechnologies={["react", <br />, ".net", <br />, "mssql"]}
              projectLink={
                "https://github.com/dzuburjasmin/my-music-playlist-app"
              }
              projectImage={props.musicimg}
            />
          </div>
          <div
            className="col-6  col-md-3 d-flex justify-content-center project"
            style={
              ProjectsIsInViewport
                ? {
                    animationName: "pageloadhi",
                    animationFillMode: "forwards",
                    animationDuration: "1s",
                    animationDelay: "0.6s",
                    animationIterationCount: "1",
                  }
                : {}
            }
          >
            <ProjectTemplate
              projectName={"movie API app"}
              projectStack={"frontend"}
              projectTechnologies={["react", <br />, "bootstrap"]}
              projectLink={"https://github.com/dzuburjasmin/movie-api-app"}
              projectImage={props.movieimg}
            />
          </div>
          <div
            className="col-6 col-md-3 d-flex justify-content-center project"
            style={
              ProjectsIsInViewport
                ? {
                    animationName: "pageloadhi",
                    animationFillMode: "forwards",
                    animationDuration: "1s",
                    animationDelay: "0.7s",
                    animationIterationCount: "1",
                  }
                : {}
            }
          >
            <ProjectTemplate
              projectName={"hospital management"}
              projectStack={"fullstack"}
              projectTechnologies={[
                "javascript",
                <br />,
                "nodejs",
                <br />,
                "mysql",
              ]}
              projectLink={
                "https://github.com/dzuburjasmin/Hospital-Management-System"
              }
              projectImage={props.hospitalimg}
            />
          </div>
        </div>
        <div className="row g-0 h-100 w-100 mt-md-4 ">
          <div
            className="col-6 col-md-3 d-flex justify-content-center project"
            style={
              ProjectsIsInViewport
                ? {
                    animationName: "pageloadhi",
                    animationFillMode: "forwards",
                    animationDuration: "1s",
                    animationDelay: "0.8s",
                    animationIterationCount: "1",
                  }
                : {}
            }
          >
            <ProjectTemplate
              projectName={"personal portfolio website"}
              projectStack={"frontend"}
              projectTechnologies={["react", <br />, " bootstrap"]}
              projectLink={"https://github.com/dzuburjasmin/Portfolio"}
              projectImage={props.portfolioimg}
            />
          </div>
          <div
            className="col-6 col-md-3 d-flex justify-content-center project"
            style={
              ProjectsIsInViewport
                ? {
                    animationName: "pageloadhi",
                    animationFillMode: "forwards",
                    animationDuration: "1s",
                    animationDelay: "0.9s",
                    animationIterationCount: "1",
                  }
                : {}
            }
          >
            <ProjectTemplate
              projectName={"to-do list"}
              projectStack={"frontend"}
              projectTechnologies={"react"}
              projectLink={"https://github.com/dzuburjasmin/React-To-Do-App"}
              projectImage={props.todoimg}
            />
          </div>
          <div
            className="col-6 col-md-3 d-flex justify-content-center project"
            style={
              ProjectsIsInViewport
                ? {
                    animationName: "pageloadhi",
                    animationFillMode: "forwards",
                    animationDuration: "1s",
                    animationDelay: "1s",
                    animationIterationCount: "1",
                  }
                : {}
            }
          >
            <ProjectTemplate
              projectName={["artworks &", <br />, "designs"]}
              projectStack={"UI/UX"}
              projectTechnologies={["illustrator", <br />, "photoshop"]}
              projectLink={"#"}
              projectImage={props.artworksimg}
            />
          </div>
          <div
            className="col-6 col-md-3 d-flex justify-content-center project"
            style={
              ProjectsIsInViewport
                ? {
                    animationName: "pageloadhi",
                    animationFillMode: "forwards",
                    animationDuration: "1s",
                    animationDelay: "1.1s",
                    animationIterationCount: "1",
                  }
                : {}
            }
          >
            <ProjectTemplate
              projectName={["animations &", <br />, "videos"]}
              projectStack={"UI/UX"}
              projectTechnologies={["after effects", <br />, "premiere pro"]}
              projectLink={"#"}
              projectImage={props.animationsimg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
