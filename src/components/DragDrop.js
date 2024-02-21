import React, { useRef } from "react";
import { Children,useState } from "react";

const DragDrop = ({ 
    children,
    onDragStart=()=>{},
    onDragEnd=()=>{} // Dragend will recieve two parameters dragindex &dropindex;
}) => {
  const dragElement  = useRef();
  const dropElement = useRef();

  return (
    <div>
      {children.map((item, index) => {
        return (
          <div key={index}
            draggable
            onDragStart={() => {
                onDragStart()
                dragElement.current = index;
            }}
            onDragEnter={() => {
               
                dropElement.current = index;

            }}
            onDragEnd={() => {
                onDragEnd(dragElement.current,dropElement.current)
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
