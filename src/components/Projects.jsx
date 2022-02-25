import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="bg-orange-40 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-purple-900">
            Proyectos y Aplicaciones
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              rel="noreferrer"
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-100 bg-purple-100 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-teal-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-sky-900 mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <a
                    href={project.demo}
                    className="inline-flex items-center ml-1 mr-1 text-stone-50 bg-teal-500 border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base  mt-4 md:mt-0"
                  >
                    Demo
                  </a>
                  <a
                    href={project.link}
                    className="inline-flex items-center ml-1 mr-1 text-stone-50 bg-teal-500 border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0"
                  >
                    Codigo
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
