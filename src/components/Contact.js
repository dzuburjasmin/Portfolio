import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = (props) => {
  const geo = props.geo;
  const kotaclj = props.kotaclj;

  const targetRef = useRef(null);

  const [ContactIsInViewport, setContactIsInViewport] = useState(false);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    setContactIsInViewport(entry.intersectionRatio > 0.2);
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

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_3i4oqqx",
        e.target,
        "user_8oEooD3rbGH2BdwwpS0Hq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section
      className="container pt-5 pb-3  text-left position-relative"
      id="contactme"
      ref={targetRef}
    >
      <div id="skillsCube2" style={{ backgroundImage: `url(${geo})` }}></div>
      <div className="d-md-flex pt-3">
        <div className="container contactside text-left">
          <div className="container pb-3 ps-0">
            <h2
              className="aboutme"
              style={
                ContactIsInViewport
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
              c<img src={kotaclj} className="kotaclj" />
              ntact <b className="bold">me</b>
            </h2>
          </div>
          <div className="container ps-1 mb-4 contactmetext">
            <p
              className="aboutme"
              style={
                ContactIsInViewport
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
              I am interested in all kinds of engagements, especially in
              ambitious and challenging environments.
            </p>
            <p
              className="aboutme"
              style={
                ContactIsInViewport
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
              If you have any type of offer, don't hesitate to contact me. Also,
              you can{" "}
              <a className="downloadmycv" href={props.CVpdf} download>
                download my CV
              </a>{" "}
              for more details about reaching out to me.
            </p>
          </div>
          <form className="ps-1 d-md-flex flex-column " onSubmit={sendEmail}>
            <div
              class="form-group mb-4 aboutme"
              style={
                ContactIsInViewport
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
              <label for="name">name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                required
              />
            </div>
            <div
              className="form-group mb-4 aboutme"
              style={
                ContactIsInViewport
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
              <label for="email">email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                required
              />
            </div>
            <div
              className="form-group mb-4 aboutme"
              style={
                ContactIsInViewport
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
              <label for="message">message</label>
              <textarea
                className="form-control mb-2"
                id="message"
                name="message"
                rows="3"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn  contactbtn align-self-end aboutme"
              style={
                ContactIsInViewport
                  ? {
                      animationName: "pageloadhi",
                      animationFillMode: "forwards",
                      animationDuration: "1s",
                      animationDelay: "1.3s",
                      animationIterationCount: "1",
                    }
                  : {}
              }
            >
              send message
            </button>
          </form>
        </div>
        <div className="container"></div>
      </div>
    </section>
  );
};

export default Contact;
