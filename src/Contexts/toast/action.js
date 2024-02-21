import * as actionTypes from "./types"
export const  createActions=(dispatch)=>({
    add:(payload)=>{
        dispatch({type:actionTypes.Add, payload})
    },
    remove: ()=>{
        dispatch({type:actionTypes.Remove})
    },

    removeByIndex: (payload)=>{
        dispatch({type:actionTypes.RemoveByIndex, payload})
    }
})