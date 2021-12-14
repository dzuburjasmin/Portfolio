import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="page-footer footer mt-5 ">
        <div class="container py-2 px-4 footeruls">
          <div className="row ">
            <div className="col-4 col-md-4 p-0  offset-md-2">
              <div className="container pt-2 ">
                <h6 className="text-white  pb-2 footerheadings d-inline ">
                  MADE WITH
                </h6>

                <ul className="mt-4 list-unstyled list-inline">
                  <li className="text-white text-start">React.js</li>
                  <li className="text-white">Bootstrap</li>
                  <li className="text-white">Illustrator</li>
                  <li className="text-white">After Effects</li>
                  <li className="text-white">Email.js</li>
                  <li className="text-white">Bodymovin</li>
                  <li className="text-white">SmoothScroll</li>
                </ul>
              </div>
            </div>
            <div className="col-8 col-md-4 p-0 offset-md-2 ">
              <div className="container pt-2 text-end text-md-start">
                <h6 className="text-white  pb-2 footerheadings d-inline ">
                  CONTACT INFO
                </h6>

                <ul className="mt-4 list-unstyled list-inline align-top ">
                  <li className="text-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      class="bi bi-house-fill mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                      />
                    </svg>
                    {(" ", "   ")}
                    Sarajevo, 71000, BiH
                  </li>
                  <li className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      class="bi bi-envelope-fill mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>{" "}
                    {(" ", "   ")}
                    dzuburjasmin13@gmail.com
                  </li>
                  <li className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      class="bi bi-telephone-fill mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>{" "}
                    {(" ", "   ")}
                    +387 062/666-946
                  </li>
                  <li className="text-white">
                    <a href="https://www.facebook.com/dzuburjasmin/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        class="bi bi-facebook mb-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>{" "}
                      /facebook.com/dzuburjasmin
                    </a>
                  </li>
                  <li className="text-white">
                    <a href="https://github.com/dzuburjasmin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        class="bi bi-github mb-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>{" "}
                      /github.com/dzuburjasmin
                    </a>
                  </li>
                  <li className="text-white">
                    <a href="https://www.linkedin.com/in/jasmin-dzubur-4797241ab/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        class="bi bi-linkedin mb-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>{" "}
                      /in/jasmin-dzubur-4797241ab/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          <p className="mb-0"> © 2021 Copyright: Jasmin Dzubur</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
