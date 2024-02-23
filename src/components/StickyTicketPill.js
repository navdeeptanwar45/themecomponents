import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faExpand } from "@fortawesome/free-solid-svg-icons";
import { useStickyContext } from "../Contexts/sticky";

const StickyTicketPill = ({ color, index, text,show }) => {
  const [state, actions] = useStickyContext();
  return (
    <div
      className="sticky-tickets"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="stickyticketpill-text-container">{text.slice(0, 19)}</div>
     {!show &&
      <FontAwesomeIcon
        style={{ margin: "5px" }}
        onClick={(e) => {
          e.stopPropagation();
          actions.show_ticket({ index: index });
        }}
        icon={faExpand}
      />
      }
      <FontAwesomeIcon
        style={{ margin: "5px" }}
        icon={faTrash}
        onClick={(e) => {
          e.stopPropagation();
          actions.delete(index);
        }}
      />
    </div>
  );
};

export default StickyTicketPill;
