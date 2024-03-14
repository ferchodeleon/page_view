import { useState } from "react";
import instragram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import facebook from "../assets/icons/facebook.svg";
import x from "../assets/icons/twitter.svg";

export const History = ({ paragraphs }) => {
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
