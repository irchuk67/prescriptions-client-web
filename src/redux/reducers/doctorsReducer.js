import {GET_DOCTORS_LIST} from "../types";

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case GET_DOCTORS_LIST:
            return action.payload
        default:
            return state
    }
}