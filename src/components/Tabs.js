import React, { useState, Children } from "react";

const Tabs = ({orientation, children }) => {
  const allTabs = Children.toArray(children);
  const [show, setShow] = useState(0);
  return (
    <div className={"main-tab-container " + orientation}>
      <div className={"nav-tab-container " + orientation}>
        {allTabs.map((item, i) => {
          return <button className={'tab-button '+(show==i?'clicked':"")} onClick={() => setShow(i)}>{item.props.name}</button>;
        })}
      </div>
      <div className="text-tab-container ">{allTabs[show]}</div>
    </div>
  );
};``

export default Tabs;
