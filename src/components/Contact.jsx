import React from "react";

const Contact = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Mensaje Enviado!"))
        .catch((error) => alert(error));
    }


  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <form netlify name="contact" onSubmit={handleSubmit}>
          <h2 className="text-center mb-5 text-purple-900 sm:text-4xl text-3xl font-medium title-font">
            Trabaja Conmigo
          </h2>
          <p className="text-center leading-relaxed mb-5">
            Escríbeme con confianza ¡Estaré feliz de leerte!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-purple-100 rounded border border-purple-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-sky-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
           />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-purple-100 rounded border border-purple-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-sky-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
           />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-purple-100 rounded border border-purple-700 focus:border-purplel-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-sky-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
           />
          </div>
          <button
            type="submit"
            className="text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
