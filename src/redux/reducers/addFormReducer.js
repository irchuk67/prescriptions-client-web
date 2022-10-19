import {CLOSE_ADD_FORM, OPEN_ADD_FORM} from "../types";

const INITIAL_STATE = false
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_ADD_FORM:
            return action.payload
        case CLOSE_ADD_FORM:
            return action.payload
        default:
            return state
    }
}