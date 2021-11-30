import React from "react";

const EducationTemplate = (props) => {
  return (
    <div className="educationtemplate">
      <p>
        <b className="bold">{props.facility}</b>
        <br /> {props.placeandyear}
      </p>
    </div>
  );
};

export default EducationTemplate;
