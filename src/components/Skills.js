import React, { useState, useEffect, useRef } from "react";

const Skills = (props) => {
  const geo = props.geo;
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  const [SkillsIsInViewport, setSkillsIsInViewport] = useState(false);
  const [SkillstextIsInViewport, setSkillstextIsInViewport] = useState(false);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    setSkillsIsInViewport(entry.intersectionRatio > 0.2);
  };
  const callBackFunction2 = (entries) => {
    const [entry] = entries;
    setSkillstextIsInViewport(entry.intersectionRatio > 0.2);
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
  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction2, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
  }, [targetRef2, options]);

  return (
    <section
      className="container py-5 position-relative "
      id="myskills"
      ref={targetRef}
    >
      <div
        className="d-none d-md-block"
        id="skillsCube"
        style={{ backgroundImage: `url(${geo})` }}
      ></div>
      <div className="container pt-3 pb-5">
        <h2
          className="aboutme"
          style={
            SkillsIsInViewport
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
          <b className="bold">my</b> skills
        </h2>
      </div>
      <div className="d-md-flex skillsflex ">
        <div
          className="container skillscontainer position-relative w-md-75 aboutme"
          style={
            SkillsIsInViewport
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
        <div className="container skillstext mt-4 mt-md-0" ref={targetRef2}>
          <p
            className="skillsparagraf pt-0 "
            style={
              SkillstextIsInViewport
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
            During the years of my education backed up with self-learning, I
            have{" "}
            <b className="skillssvijetli">
              become familiar with numerous technologies{" "}
            </b>
            (front-end/back-end, database, UI/UX, video).
          </p>
          <p
            className="skillsparagraf"
            style={
              SkillstextIsInViewport
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
            Having a chance to learn the{" "}
            <b className="skillssvijetli"> fundamentals </b> and{" "}
            <b className="skillssvijetli"> practice </b> with a wide range of
            technologies helped me to improve my skills and decide what to put
            my
            <b className="skillstamni"> focus </b> on.
          </p>
          <p
            className="skillsparagraf"
            style={
              SkillstextIsInViewport
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
            Currently, I am mostly <b className="skillstamni"> concentrated </b>
            towards
            <b className="skillstamni"> front-end </b> development and I am
            working with
            <b className="skillstamni"> React.js</b>.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Skills;
