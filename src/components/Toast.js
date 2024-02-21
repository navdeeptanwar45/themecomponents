import React, { useContext, useEffect, useState } from "react";
import { useToastContext } from "../Contexts/toast";
import ToastUtil from "./ToastUtil";
const Toast = () => {
  const {state,ToastContextAction} = useToastContext();
  function handleCloseByIndex(index) {
   ToastContextAction.removeByIndex(index)
  }
  function handleClose() {
    ToastContextAction.remove()
    
  }
  return (
    <>
      {state.toasts?.map((item, index) => {
        console.log(state.toasts.length - index);
        return (
          <ToastUtil
            key={state.toasts.length - index}
            index={index}
            text={item}
            handleClose={handleClose}
            handleCloseByIndex={handleCloseByIndex}
          />
        );
      })}
    </>
  );
};

export default Toast;
