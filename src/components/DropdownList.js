import React from "react";

const DropdownList = ({heading, name ,data=[],onClick=()=>{}, fields={}}) => {
    const {text,value} = fields;
  return (
    <div>
      <label>{heading}</label>
      <select name={name} onChange={onClick}>
        {data.map((item, index)=>{
            return(
                <option key={`data${index}`} value={item[value]}>
                    {item[text]}
                </option>
            )
        })}
      </select>
    </div>
  );
};

export default DropdownList;
