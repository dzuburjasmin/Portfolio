import React from "react";

const Skills = (props) => {
  const geo = props.geo;
  return (
    <section className="container py-5 position-relative vh-100" id="myskills">
      <div
        className="d-none d-md-block"
        id="skillsCube"
        style={{ backgroundImage: `url(${geo})` }}
      ></div>
      <div className="container aboutme pt-3">
        <h2>
          <b className="bold">my</b> skills
        </h2>
      </div>
      <div className="d-md-flex skillsflex ">
        <div className="container skillscontainer position-relative me-5">
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
        <div className="container skillstext mt-0 mt-lg-5 ">
          <p className="text-right pt-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            egestas, lacus eget semper varius, mi tellus porta velit.
            <br />
            <br />
            Lorem dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean sit amet urna. <br />
            <br />
            Duis semper rutrum leo, sit amet consectetur nisl consectetur sed.
            Etiam finibus aliquet..
          </p>
        </div>
      </div>
    </section>
  );
};
export default Skills;
