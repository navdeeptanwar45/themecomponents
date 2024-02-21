import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Overlay from "./Overlay";
const Modal = ({showModal=true,toggle,heading,size,children}) => {
  return (
   (
      <Overlay className={showModal?"":"dnone"} onClick={toggle}>
        <div className={"modal-main-div "+ size+' '+ (showModal?"":"dnone")} onClick={(e)=>e.stopPropagation()} > 
          <FontAwesomeIcon  className="modal-cross-icon"
            icon={faX}
            onClick={toggle}
          />
          <div className="modal-head-div" >
          <h1 className="modal-heading">{heading}</h1>
          
          </div>
          
        
          <div className="modal-body">{children}</div>
          </div>
        </Overlay>
    )
  );
};

export default Modal;
