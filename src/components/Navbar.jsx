import { ArrowRightIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <div>
      <header className="bg-stone-100 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="#about"
            className="title-font font-medium text-purple-900 mb-4 md:mb-0 ml-3 text-xl"
          >
            Isabella Risso
          </a>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l-2 md:border-teal-500	flex flex-wrap items-center text-base justify-center">
            <a
              href="#projects"
              className="mr-5 text-sky-900 hover:text-teal-700"
            >
              Proyectos
            </a>
            <a href="#skills" className="mr-5 text-sky-900 hover:text-teal-700">
              Habilidades
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center text-stone-50 bg-teal-500 border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0"
          >
            Contacto
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
