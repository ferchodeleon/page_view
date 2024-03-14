import { useState } from "react";
import instragram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import facebook from "../assets/icons/facebook.svg";
import x from "../assets/icons/twitter.svg";

const paragraphs = [
  "Somos la generación que hace la diferencia, nos revelamos ante el molde mediocre de este mundo, somos contracultura, no nos conformamos con las modas o ideologías del momento.",
  "Somos una generación revolucionaria, y con nuestra frente en alto reconocemos sin temor ni vergüenza que Dios es real y que está vivo. Avanzamos firmes porque sabemos que con nuestras pisadas temblará la tierra y que con nuestra voz su presencia desciende.",
  "Conocemos la verdadera causa por la cual debemos luchar, y unidos somos un ejército devastador e incansable que está listo para la victoria. Aquella que conquistamos con ojos cerrados y con rodillas sobre la tierra. Nuestras voces traen una nueva canción; aquella que revela la perfecta paz.",
  "Si morimos por Cristo, también viviremos con él. Si soportamos los sufrimientos, compartiremos su reinado. Si decimos que no lo conocemos, también él dirá que no nos conoce. Y aunque no seamos fieles, él permanece fiel; porque jamás rompe su promesa.",
  "Tú y yo, juntos, ¡SOMOS NXTWAVE",
  "Tú y yo, juntos, ¡SOMOS LA REVOLUCIÓN!",
];

export const History = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const paragraphsToShow = showAll ? 1000 : 2;

  return (
    <div className="history-section">
      <div>
        <div className="container-history-text">
          <div>
            {paragraphs.slice(0, paragraphsToShow).map((pragraph, index) => (
              <p key={index} className="history-text">
                {pragraph}
              </p>
            ))}
          </div>
          <button className="showParagraphs" onClick={toggleShowAll}>
            {showAll ? "Ocultar" : "Ver más"}
          </button>
        </div>
        <div className="history-socialmedia">
          <h2>¡Saber más!</h2>
          <div className="social-media">
            <div className="social-icons instagram">
              <a
                target="_blank"
                href="https://www.instagram.com/nxtwaaave/"
                rel="noreferrer"
              >
                <img src={instragram} alt="instagram" />
                <p>Instagram</p>
              </a>
            </div>
            <div className="social-icons youtube">
              <a
                target="_blank"
                href="https://www.youtube.com/@NxtWaveBand"
                rel="noreferrer"
              >
                <img src={youtube} alt="youtube" />
                <p>Youtube</p>
              </a>
            </div>
            <div className="social-icons facebook">
              <a
                target="_blank"
                href="https://www.facebook.com/nxtwaaave"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" />
                <p>Facebook</p>
              </a>
            </div>
            <div className="social-icons x">
              <a
                target="_blank"
                href="https://twitter.com/nxtwaaave"
                rel="noreferrer"
              >
                <img src={x} alt="x" />
                <p>X</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
