import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Accordian = ({
  text = "",
  heading = "",
  showId = 0,
  setShowId = () => {},
  index = 0,
  children,
}) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="Accordian-main">
      <div
        className="Accordian-header"
        onClick={() => {
          showId === index ? setShowText((prev) => !prev) : setShowText(true);
          setShowId(index);
          console.log(index);
        }}
      >
        <h3>{heading}</h3>
        {showText && showId == index ? (
          <FontAwesomeIcon className="Accordian-chevron" icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon className="Accordian-chevron" icon={faChevronDown} />
        )}
      </div>
      <div
        className={
          "Accordian-body" + (showText && showId == index ? " show" : " hide")
        }
      >
        {children || <p>{text}</p>}
      </div>
    </div>
  );
};

export default Accordian;
