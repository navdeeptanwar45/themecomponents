import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Accordian from "./Accordian";

const Accordians = ({ data }) => {
  const [showText, setShowText] = useState(false);
  const [showId, setShowId] = useState();

  return data.map(({ heading, text, children }, i) => {
    return (
      <>
        <Accordian
          showId={showId}
          setShowId={setShowId}
          heading={heading}
          text={text}
          index={i}
        >
          {children}
        </Accordian>
      </>
    );
  });
};

export default Accordians;
