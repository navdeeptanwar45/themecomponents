import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useStickyContext } from "../Contexts/sticky";
import StickyTicketPill from "./StickyTicketPill";
const StickyNote = ({}) => {
  const [state, actions] = useStickyContext();
  return (
    <div className="sticky-main">
      <div className="sticky-left">
        <div>
          {" "}
          <FontAwesomeIcon icon={faPlus} onClick={() => actions.add()} />
        </div>
        <div>
          {" "}
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => actions.delete_all()}
          />
        </div>
      </div>
      <div className="sticky-ticket-container">
        {state?.ticket?.map((item, index) => {
          return (
            <StickyTicketPill key={index} index={index} text={item.text} color={item.color} show={item.display=='block'}> </StickyTicketPill>
          );
        })}
      </div>
    </div>
  );
};

export default StickyNote;
