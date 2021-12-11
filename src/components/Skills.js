import React from "react";

const Skills = (props) => {
  const geo = props.geo;
  return (
    <section className="container py-5 position-relative " id="myskills">
      <div
        className="d-none d-md-block"
        id="skillsCube"
        style={{ backgroundImage: `url(${geo})` }}
      ></div>
      <div className="container aboutme pt-3 pb-5">
        <h2>
          <b className="bold">my</b> skills
        </h2>
      </div>
      <div className="d-md-flex skillsflex ">
        <div className="container skillscontainer position-relative w-md-75">
          <h4>html</h4>
          <h4>wordpress</h4>
          <h4>javascript</h4>
          <h4>react</h4>
          <h4>git</h4>
          <h4>figma</h4>
          <h4>bootstrap</h4>
          <h4>sass</h4>
          <h4>aftereffects</h4>
          <h4>c++</h4>
          <h4>java</h4>
          <h4>css</h4>
          <h4>illustrator</h4>
          <h4>photoshop</h4>
          <h4>premiere</h4>
          <h4>nodejs</h4>
          <h4>sql</h4>
          <h4>python</h4>
          <h4>php</h4>
          <h4>.net</h4>
        </div>
        <div className="container skillstext mt-0  ">
          <p className="text-right pt-0 ">
            During the years of my professional education, as well as
            self-learning, I have{" "}
            <b className="skillssvijetli">
              become familiar with numerous technologies{" "}
            </b>
            (front-end, back-end, UI/UX, video).
            <br />
            <br />
            Most of my work was based on developing interactive web applications
            with a<b className="skillstamni"> focus </b> on{" "}
            <b className="skillstamni"> front-end </b> with a pinch of arts and
            <b className="skillstamni"> design </b>.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Skills;
