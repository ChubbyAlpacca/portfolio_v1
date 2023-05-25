import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-nintendoScheme-lightGray">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">
            Hi, I'm Cam.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Cameron is a full stack engineer with experience working on
            developing apis and user interfaces in a greenfield fintech project
            environment. Having previous experience outside of developing
            Cameron brings a plethora of project management, team leadership and
            business side problem solving skills from previous roles within the
            armed forces and construction project management.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="rounded-full max-h-lg">
          <img
            className="object-cover object-center rounded-tr-extraLarge rounded-bl-extraLarge"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
