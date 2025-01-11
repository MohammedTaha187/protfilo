import React from "react";
import AboutImage from "../../assets/HomeImage.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-section bg-black text-white py-5" id="about">
      <div className="container">
        <h2 className="text-center display-4 mb-4">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={AboutImage}
              alt="Profile"
              className="profile-image rounded-circle border border-success"
            />
          </div>
          <div className="col-md-8">
            <p className="lead mb-4">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="mb-4">
              <h5>Skills</h5>
              <div className="mb-3">
                <label>HTML & CSS & Javascript</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <label>Bootstrap</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <label>React JS</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <label>PhP</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <label>Databases MySql</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <label>Laravel</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="mb-3">
                <label>Version Control</label>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between text-center">
              <div>
                <h3 className="text-success">3+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-info">50+</h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-warning">10+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
