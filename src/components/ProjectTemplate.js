import React from "react";

const ProjectTemplate = (props) => {
  return (
    <div className="projectelement position-relative m-1">
      <img src={props.projectImage} className="img-fluid" />
      <a href={props.projectLink}>
        <div className="projectinfo p-3 d-flex flex-column justify-content-between ">
          <h5 className="bold">{props.projectName}</h5>
          <h5 className="align-self-end">{props.projectStack}</h5>
          <h5>{props.projectTechnologies}</h5>
        </div>
      </a>
    </div>
  );
};

export default ProjectTemplate;
