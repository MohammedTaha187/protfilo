import React from "react";
import ecommerceImage from "../../assets/ecommerce.webp";
import movesImage from "../../assets/moves.webp";
import caffieImage from "../../assets/caffie.webp";
import "./Projects.css";

const projects = [
    {
      id: 1,
      name: "E-commerce",
      technologies: "React, HTML, CSS, Bootstrap , api ",
      image: ecommerceImage,
      github: "https://github.com/MohammedTaha187/e-commerce.git",
      project :"https://mohammedtaha187.github.io/e-commerce/",

    },
    {
      id: 2,
      name: "Movies App",
      technologies: "React, HTML, CSS, Bootstrap , api",
      image: movesImage,
      github: "https://github.com/MohammedTaha187/movie.git",
      project :"https://mohammedtaha187.github.io/movie/",
    },
    {
      id: 3,
      name: "Café Management System",
      technologies: "HTML, CSS, Bootstrap",
      image: caffieImage,
      github: "https://github.com/MohammedTaha187/Food.git",
      project :"https://mohammedtaha187.github.io/Food/",

    },
  ];
  

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card shadow-custom">
              <img
                src={project.image}
                alt={project.name}
                className="card-img rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="card-title text-2xl font-bold mb-2">{project.name}</h3>
              <p className="card-technologies text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="card-link inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.project}
                className="card-link inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
