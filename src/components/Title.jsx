import React from "react";
import Typewriter from "typewriter-effect";

const Title = (props) => {
  return (
    <section>
      <div className="typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hola!")
              .pauseFor(2000)
              .typeString(" Soy Isabella Risso")
              .pauseFor(2000)
              .deleteChars(6)
              .typeString(", desarrolladora Front-End y Diseñadora Gráfica")
              .start();
          }}
          options={{
            wrapperClassName: "typewriter-text",
            cursorClassName: "typewriter-cursor",
          }}
        />
      </div>
    </section>
  );
};

export default Title;
