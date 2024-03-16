import { useState } from "react";

export const History = ({ paragraphs }) => {
  const [showAll, setShowAll] = useState(false);
  const [paragraphHeight, setParagraphHeight] = useState("auto");

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setParagraphHeight(showAll ? "auto" : "Opx");
  };

  const paragraphsToShow = showAll ? 1000 : 1;

  return (
    <div id="history" className="history-section">
      <div>
        <div className="container-history-text">
          <div>
            {paragraphs.slice(0, paragraphsToShow).map((pragraph, index) => (
              <p
                key={index}
                className="history-text"
                style={{ maxHeight: paragraphHeight }}
              >
                {pragraph}
              </p>
            ))}
          </div>
          <button className="showParagraphs" onClick={toggleShowAll}>
            {showAll ? "Ocultar" : "Ver más"}
          </button>
        </div>
      </div>
    </div>
  );
};
