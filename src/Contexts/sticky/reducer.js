import * as actionType from "./type";

const colors = [
  "#bf4040",
  "#be663f",
  "#c08c40",
  "#bfb240",
  "#a6bf40",
  "#e3f1d7",
  "#59bf40",
  "#40bf4c",
  "#40bf73",
  "#40bf99",
  "#40bfbf",
  "#3f99bf",
  "#4072bf",
  "#7f3fbf",
  "#a63fbf",
  "#3f4cbf",
  "#5940bf",
  "#bf40b2",
  "#bf408d",
  "#bf4065",
]
export const initialState = {
  ticket: [],
  colorArr: colors,
  dropIndex:0,
  dragIndex:0
}

export const reducer = (state, action) => {
  let copyarr
  switch (action.type) {
    case actionType.ADD:
      return { ...state,
        ticket: [
          {
            color: state.colorArr[state.ticket.length % 20],
            text: "",
            display: "block",
          },
          ...state.ticket,
        ]
        
      }

    case actionType.DELETE:
      copyarr = [...state.ticket];
      copyarr.splice(action.payload, 1);
      return {...state, ticket: copyarr, dragIndex:0,dropIndex:0 };

    case actionType.DELETE_ALL:
      return { ticket: [], colorArr: state.colorArr,dragIndex:0,dropIndex:0 };

    case actionType.CHANGE_COLOR:
      copyarr = [...state.ticket];
      copyarr[action.payload.index].color = action.payload.color;
      return { ticket: copyarr, colorArr: state.colorArr,dragIndex:0,dropIndex:0 };

    case actionType.CHANGE_TEXT:
      copyarr = [...state.ticket];
      copyarr[action.payload.index].text = action.payload.text;
      return { ticket: copyarr, colorArr: state.colorArr,dragIndex:0,dropIndex:0 };

    case actionType.HIDE_TICKET:
      copyarr = [...state.ticket];
      copyarr[action.payload.index].display = "none";
      return { ticket: copyarr, colorArr: state.colorArr,dragIndex:0,dropIndex:0 };

    case actionType.SHOW_TICKET:
      copyarr = [...state.ticket];
      copyarr[action.payload.index].display = "block";
      return { ...state,
        ticket: copyarr
       
      };

    case actionType.DROPEND:
      copyarr = [...state.ticket];
     const temp = copyarr[state.dragIndex]
     copyarr.splice(state.dragIndex,1);
     copyarr.splice(state.dropIndex,0,temp)
      return { ...state,ticket: copyarr,dragIndex:0,dropIndex:0  }

    case actionType.SET_DRAG_INDEX:
      return { ...state,dragIndex:action.payload  }

    case actionType.SET_DROP_INDEX:
      return { ...state,dropIndex:action.payload  }
  }
}
