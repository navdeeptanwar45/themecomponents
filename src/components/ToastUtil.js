import React, { useEffect } from "react";

const ToastUtil = ({ index, handleClose,text ,handleCloseByIndex}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClose();
    }, 3000);
  }, []);

  return (
    <div className="toast">
        <div>{text}</div>
      <button className="toast-cross" onClick={() => handleCloseByIndex(index)}> X </button>
    </div>
  );
};

export default ToastUtil;
