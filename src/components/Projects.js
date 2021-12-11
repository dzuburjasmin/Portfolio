import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const Projects = (props) => {
  const geo = props.geo;
  const kotaclj = props.kotaclj;
  return (
    <section className="container pt-5 position-relative" id="myprojects">
      <div className="triangel2 ">
        {" "}
        <img src={props.trokut} />
      </div>
      <div className="container pt-3 pb-2">
        <h2>
          <b className="bold">my</b> pr
          <img src={kotaclj} className="kotaclj" />
          jects
        </h2>
      </div>
      <div className="container projectcontainer position-relative pt-1">
        <div className="row g-0 h-100 w-100 ">
          <div className="col-6 col-md-3 d-flex justify-content-center">
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
              projectLink={"#"}
              projectImage={props.shoppingimg}
            />
          </div>

          <div className="col-6  col-md-3 d-flex justify-content-center">
            <ProjectTemplate
              projectName={["my music playlist app"]}
              projectStack={"fullstack"}
              projectTechnologies={["react", <br />, ".net", <br />, "mssql"]}
              projectLink={"#"}
              projectImage={props.musicimg}
            />
          </div>
          <div className="col-6  col-md-3 d-flex justify-content-center ">
            <ProjectTemplate
              projectName={"movie API app"}
              projectStack={"frontend"}
              projectTechnologies={["react", <br />, "bootstrap"]}
              projectLink={"#"}
              projectImage={props.movieimg}
            />
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center">
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
              projectLink={"#"}
              projectImage={props.hospitalimg}
            />
          </div>
        </div>
        <div className="row g-0 h-100 w-100 mt-md-4 ">
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <ProjectTemplate
              projectName={"personal portfolio website"}
              projectStack={"frontend"}
              projectTechnologies={["react", <br />, " bootstrap"]}
              projectLink={"#"}
              projectImage={props.portfolioimg}
            />
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <ProjectTemplate
              projectName={"to-do list"}
              projectStack={"frontend"}
              projectTechnologies={"react"}
              projectLink={"#"}
              projectImage={props.todoimg}
            />
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <ProjectTemplate
              projectName={["artworks &", <br />, "designs"]}
              projectStack={"UI/UX"}
              projectTechnologies={["illustrator", <br />, "photoshop"]}
              projectLink={"#"}
              projectImage={props.artworksimg}
            />
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center">
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
