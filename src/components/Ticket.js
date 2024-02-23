import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faBars,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useStickyContext } from "../Contexts/sticky";
const Ticket = ({ ticketId, text, color }) => {
  const [showColor, setShowColor] = useState(false);
  const [state, actions] = useStickyContext();
  const colorArr = state.colorArr;
  return (
    <div
      className="ticket-main"
      draggable
      onDragStart={() => actions.setdragindex(ticketId)}
      onDragEnter={() => actions.setdropindex(ticketId)}
      onDragOver={(e)=>e.preventDefault()}
      onDragEnd={() => actions.dropend()}
      style={{
        backgroundColor: `${color}`,
        display: `${state.ticket[ticketId].display}`,
      }}
    >
      <div className="ticket-head">
        <div className="ticket-plus">
          <FontAwesomeIcon icon={faPlus} onClick={() => actions.add()} />
        </div>
        <div className="ticket-head-right">
          <div className="ticket-bars">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setShowColor((prev) => !prev)}
            />
          </div>
          <div className="ticket-minus">
            <FontAwesomeIcon
              icon={faMinus}
              onClick={() => actions.hide_ticket({ index: ticketId })}
            />
          </div>
          <div className="ticket-delete">
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => actions.delete(ticketId)}
            />
          </div>
        </div>
      </div>
      <div className="ticket-body" style={{ backgroundColor: "white" }}>
        {showColor ? (
          colorArr.map((item, index) => {
            return (
              <div
                className={`ticket-color-box `}
                style={{ backgroundColor: `${item}` }}
                key={index}
                onClick={() => {
                  actions.change_color({
                    index: ticketId,
                    color: colorArr[index],
                  });
                  setShowColor(false);
                }}
              ></div>
            );
          })
        ) : (
          <textarea
            placeholder="Add your notes..."
            className="ticket-textbox"
            style={{ backgroundColor: `${color}` }}
            value={text}
            onChange={(e) => {
              actions.change_text({ text: e.target.value, index: ticketId });
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Ticket;
