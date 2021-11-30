import React from "react";

const Contact = (props) => {
  const geo = props.geo;
  const kotaclj = props.kotaclj;
  return (
    <section
      className="container pt-5  text-left position-relative"
      id="contactme"
    >
      <div id="skillsCube2" style={{ backgroundImage: `url(${geo})` }}></div>
      <div className="d-md-flex pt-3">
        <div className="container contactside text-left">
          <div className="container pb-3 ps-0">
            <h2>
              c<img src={kotaclj} className="kotaclj" />
              ntact <b className="bold">me</b>
            </h2>
          </div>
          <div className="container ps-1 pb-4 contactmetext">
            <p className="mb-1">
              job <b className="bold"> offer</b> ?
            </p>
            <p className="mb-1">
              <b className="bold">freelance</b> inquiry ?{" "}
            </p>
            <p className="mb-1">
              or just a quick<b className="bold"> chat</b> ?
            </p>
            <p className="mb-1">
              don't hesitate to send me a<b className="bold"> message</b>.
            </p>
          </div>
          <form className="ps-1 d-md-flex flex-column ">
            <div class="form-group mb-4">
              <label for="email">name:</label>
              <input type="email" className="form-control " />
            </div>
            <div className="form-group mb-4">
              <label for="email">email:</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group mb-4">
              <label for="message">message</label>
              <textarea
                className="form-control mb-3"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn contactbtn align-self-end">
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
