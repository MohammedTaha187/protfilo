import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3 px-md-5 px-lg-7">
      <div className="container-fluid">
        <a className="navbar-brand d-none d-md-inline text-white text-2xl font-bold" href="#">Mohammed</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row justify-content-center w-100">
            <li className="nav-item">
              <a className="nav-link text-white hover:text-gray-400" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white hover:text-gray-400" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white hover:text-gray-400" href="#service">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white hover:text-gray-400" href="#project">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white hover:text-gray-400" href="#contact">Contact</a>
            </li>
          </ul>
          <button className="btn btn-success d-none d-md-inline transform transition-transform duration-300 hover:scale-105 px-3 py-1 rounded-full">
            ConnectMe
          </button>
         

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
