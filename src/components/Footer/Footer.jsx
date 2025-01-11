import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h3 className="h2 font-weight-bold mb-2">Mohammed</h3>
            <p className="text-muted">
              Full-Stack Developer based in the USA, specializing in web and
              software development.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <form className="d-flex">
              <input
                type="email"
                placeholder="Your email"
                className="form-control mr-2 rounded-left bg-secondary border-dark text-white"
              />
              <button
                type="submit"
                className="btn btn-gradient text-white rounded-right"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-top border-dark pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-muted mb-3 mb-md-0">
            &copy; {new Date().getFullYear()} Mohammed. All rights reserved.
          </p>
          <div className="social-icons d-flex gap-4 my-3 my-md-0">
            <a href="#" className="text-muted hover-text-green">
              <FaFacebook />
            </a>
            <a href="#" className="text-muted hover-text-green">
              <FaTwitter />
            </a>
            <a href="#" className="text-muted hover-text-green">
              <FaLinkedin />
            </a>
            <a href="#" className="text-muted hover-text-green">
              <FaGithub />
            </a>
          </div>
          <div className="d-flex gap-4">
            <a href="#" className="text-muted hover-text-green">
              Privacy
            </a>
            <a href="#" className="text-muted hover-text-green">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
