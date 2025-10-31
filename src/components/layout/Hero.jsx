import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/VXmvGgq/Bangladesh-Liberation-War.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="flex flex-col text-center items-center">
          <h1 className="mb-5 text-5xl font-bold">The Legacy of 1971</h1>
          <p className="mb-5">
            The year 1971 marked a turning point in the history of Bangladesh—a
            time of immense struggle, sacrifice, and ultimately, triumph. The
            legacy of this pivotal year lives on through the resilience of a
            nation that fought for its identity, language, and freedom. It is a
            story etched in the hearts of millions, reminding future generations
            of the price of independence and the power of unity.
          </p>
          <button className="btn bg-[#4c9b6e] w-2/12">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
