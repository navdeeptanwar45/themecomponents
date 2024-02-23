import React, { useState } from "react";
import { useStickyContext } from "../Contexts/sticky";
import StickyNote from "./StickyNote";
import Ticket from "./Ticket";

const StickyNoteWrapper = () => {
  const [state, actions] = useStickyContext();
  console.log(state);

  return (
    <div className="sticky-wrapper">
      <StickyNote />
      <div className="sticky-wrapper-ticket-container">
        {state?.ticket?.map((item, index) => {
          return (
            <Ticket
              key={index}
              color={item.color}
              ticketId={index}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StickyNoteWrapper;
