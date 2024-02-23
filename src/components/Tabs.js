import React, { useState, Children } from "react";
import DirectionLayout from "./DirectionLayout";

const Tabs = ({ orientation, children }) => {
  const allTabs = Children.toArray(children);
  const [show, setShow] = useState(0);
  return (
    <DirectionLayout
    orientation={orientation}
      content={
        <div className={"nav-tab-container " + orientation}>
          {allTabs.map((item, i) => {
            return (
              <button
                className={"tab-button " + (show === i ? "clicked" : "")}
                onClick={() => setShow(i)}
              >
                {item.props.name}
              </button>
            );
          })}
        </div>
      }
    >
      <div className="text-tab-container ">{allTabs[show]}</div>
    </DirectionLayout>
  );
};

export default Tabs;
