import React from "react";
import "./styles.css"; // رابط ملف CSS

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

const Service = () => {
  return (
    <div id="service">
      <div className="container">
        <h2>My Services</h2>
        <div className="grid">
          {services.map((service) => (
            <div key={service.id} className="card">
              <div className="id">{service.id}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
