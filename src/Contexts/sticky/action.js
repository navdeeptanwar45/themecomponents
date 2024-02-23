import * as actionType from "./type";
export const actionCreator = (dispatch) => ({
  add: () => {
    dispatch({ type: actionType.ADD });
  },
  delete: (payload) => {
    dispatch({ type: actionType.DELETE, payload });
  },
  delete_all: () => {
    dispatch({ type: actionType.DELETE_ALL });
  },
  change_color: (payload) => {
    dispatch({ type: actionType.CHANGE_COLOR, payload });
  },
  change_text: (payload) => {
    dispatch({ type: actionType.CHANGE_TEXT, payload });
  },
  hide_ticket: (payload) => {
    dispatch({ type: actionType.HIDE_TICKET, payload });
  },
  show_ticket: (payload) => {
    dispatch({ type: actionType.SHOW_TICKET, payload });
  },
  dropend:(payload)=>{
    dispatch({type:actionType.DROPEND});
  },
  setdropindex:(payload)=>{
    dispatch({type:actionType.SET_DROP_INDEX,payload});
  },
  setdragindex:(payload)=>{
    dispatch({type:actionType.SET_DRAG_INDEX,payload});
  },

});
