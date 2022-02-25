import React from "react";
import Title from "./Title";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-900">
            <Title />
          </h1>
          <p className="mb-8 leading-relaxed">
            Soy autodidacta, colaborativa y resolutiva. Me considero una persona
            optimista y atrevida. Trato de vivir mi vida con ojos de turista, y
            poner atención en las pequeñas cosas. No temo enfrentar desafíos, ya
            que disfruto mucho aprender cosas nuevas.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-teal-400 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded text-lg"
            >
              Trabaja Conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-200 bg-sky-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 hover:text-white rounded text-lg"
            >
              Proyectos Anteriores
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="caricatura de isabella"
            src="./caricatura_isabella.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
