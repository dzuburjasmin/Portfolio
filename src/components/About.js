import React, { useState, useEffect, useRef } from "react";
import EducationTemplate from "./EducationTemplate";

const About = (props) => {
  const kotaclj = props.kotaclj;
  const targetRef = useRef(null);
  const [EducationIsInViewport, setEducationIsInViewport] = useState(false);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    setEducationIsInViewport(entry.intersectionRatio > 0.2);
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
      className="container position-relative  pt-5  text-left "
      id="aboutme"
    >
      <div className="triangel">
        <img
          style={
            EducationIsInViewport ? { animationName: "pageloadcircle" } : {}
          }
          src={props.trokut}
        />
      </div>

      <div className="d-md-flex pt-3 ">
        <div className="container aboutmecontainer ">
          <img
            className="img-fluid maxica"
            src={props.maxa}
            alt="sneakerimage"
          />
          <div className="container aboutme pb-5 pb-md-3 pb-lg-5 ps-0">
            <h2>
              ab
              <img src={kotaclj} className="kotaclj" />
              ut <b className="bold">me</b>
            </h2>
          </div>
          <p>
            I am a student of Software Engineering passionate for
            <b className="skillstamni"> web development </b>. Besides the
            university education, where the focus was put on Software
            Development and Data Science, I dedicated my additional time to
            learning about design, animation and video editing.
            <br />
            <br />
            With a foothold in Software Engineering and passion for arts and
            design, I am mostly focused on front-end development (currently
            working with <b className="skillstamni"> React.js </b>). My area of
            interest is developing responsive web applications and designing
            user interfaces based on implementation of research in
            human-computer interaction.
            <br />
            <br />I am very devoted, hard-working and I have a substantial will
            to learn and work on challenging projects in new environments where
            I can grow and expand my knowledge.
          </p>
        </div>

        <div className="container position-relative pt-4 ps-0" ref={targetRef}>
          <svg
            className="aboutline position-absolute mt-3"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 575.15 570.28"
            preserveAspectRatio="none"
          >
            <path
              className="linedraw"
              d="M473.8,241.75,833.5,380.1,378.75,500.7l501.5,56.15-452.2,190.4"
              transform="translate(-376.7 -241.36)"
              style={EducationIsInViewport ? { animationName: "drawline" } : {}}
            />
          </svg>
          <div className="row mb-5 text-white">
            <div className="container mb-2">
              <div
                className="col-6 offset-2 education"
                style={
                  EducationIsInViewport
                    ? {
                        animationName: "pageloadhi",
                        animationFillMode: "forwards",
                        animationDuration: "1.5s",
                        animationDelay: "0s",
                        animationIterationCount: "1",
                      }
                    : {}
                }
              >
                <EducationTemplate
                  facility={"Third Gymnasium"}
                  placeandyear={"Sarajevo,2014-2016"}
                />
              </div>
            </div>
          </div>
          <div className="row mt-0 text-white">
            <div
              className="col-md-6 offset-7   education"
              style={
                EducationIsInViewport
                  ? {
                      animationName: "pageloadhi",
                      animationFillMode: "forwards",
                      animationDuration: "1.5s",
                      animationDelay: "0.8s",
                      animationIterationCount: "1",
                    }
                  : {}
              }
            >
              <EducationTemplate
                facility={"Adobe Premiere Pro course"}
                placeandyear={"ACADEMY387, Sarajevo, 2016"}
              />
            </div>
          </div>
          <div className="row mt-3 mt-md-4 text-white">
            <div className="container mt-2 ">
              <div
                className="col-6 ms-3 education"
                style={
                  EducationIsInViewport
                    ? {
                        animationName: "pageloadhi",
                        animationFillMode: "forwards",
                        animationDuration: "1.5s",
                        animationDelay: "1.1s",
                        animationIterationCount: "1",
                      }
                    : {}
                }
              >
                <EducationTemplate
                  facility={"Gymnasium Dobrinja"}
                  placeandyear={"Sarajevo, 2016-2018"}
                />
              </div>
            </div>
          </div>
          <div className="row text-white">
            <div
              className="col-md-6 offset-7 education"
              style={
                EducationIsInViewport
                  ? {
                      animationName: "pageloadhi",
                      animationFillMode: "forwards",
                      animationDuration: "1.5s",
                      animationDelay: "1.4s",
                      animationIterationCount: "1",
                    }
                  : {}
              }
            >
              <EducationTemplate
                facility={"Web Development course"}
                placeandyear={"IUS Sarajevo, 2018"}
              />
            </div>
          </div>
          <div className="row mt-5 text-white">
            <div className="container mt-3 mt-md-5">
              <div
                className="col-md-6  mt-1 education"
                style={
                  EducationIsInViewport
                    ? {
                        animationName: "pageloadhi",
                        animationFillMode: "forwards",
                        animationDuration: "1.5s",
                        animationDelay: "1.7s",
                        animationIterationCount: "1",
                      }
                    : {}
                }
              >
                <EducationTemplate
                  facility={
                    "International University of Sarajevo (Software Engineering)"
                  }
                  placeandyear={"Sarajevo, 2018-2022*"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
