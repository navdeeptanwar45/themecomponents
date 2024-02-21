import React, { useRef } from "react";
import { Children,useState } from "react";

const DragDrop = ({ children,handleDrop }) => {
  const dragElement  = useRef();
  const dropElement = useRef();

  return (
    <div>
      {children.map((item, index) => {
        return (
          <div key={index}
            draggable
            onDragStart={() => {
                dragElement.current = index;
            }}
            onDragEnter={() => {
                dropElement.current = index;

            }}
            onDragEnd={() => {
               handleDrop(dragElement.current,dropElement.current)
            }}
            onDragOver={(e)=>e.preventDefault()}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default DragDrop;
