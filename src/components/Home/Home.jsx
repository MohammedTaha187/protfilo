import React from "react";
import HomeImage from "../../assets/HomeImage.jpg";
import './Home.css'

const Home = () => {
  return (
    <div
      className="bg-black text-white min-h-screen flex flex-col justify-center items-center"
      style={{
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <img
  src={HomeImage}
  alt="Profile"
  className="profile-image rounded-circle border border-success"
/>

      <h1 className="text-4xl font-bold mb-4">
        I'm <span className="text-green-400">Mohammed Taha</span>, Full-Stack
        Web Developer
      </h1>
      <p className="text-lg text-gray-300 mb-6 max-w-3xl">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-4">
        <button className="btn btn-success px-4 py-2 rounded-pill transform transition-transform duration-300 hover:scale-105">
          Contact With Me
        </button>
        <button className="btn btn-warning px-4 py-2 rounded-pill transform transition-transform duration-300 hover:scale-105 ml-3">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
