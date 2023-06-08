import {CLOSE_UPDATE_FORM, OPEN_UPDATE_FORM} from "../types";

const INITIAL_STATE = false;
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case OPEN_UPDATE_FORM:
            return action.payload
        case CLOSE_UPDATE_FORM:
            return action.payload
        default:
            return state
    }
}