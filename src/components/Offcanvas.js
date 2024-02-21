import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Overlay from "./Overlay";
const Offcanvas = ({ orientation, showCanvas, toggle }) => {

  return (
    <Overlay className={showCanvas ? "" : "dnone"} onClick={toggle}>
      <div
        className={
          "offcanvas-main-div " + orientation + (showCanvas ? " show" : " hide")
        }
        onClick={((e)=>(e.stopPropogation()))}
      >
        <FontAwesomeIcon
          className="modal-cross-icon"
          icon={faX}
          onClick={toggle}
        />
      </div>
    </Overlay>
  );
};

export default Offcanvas;
