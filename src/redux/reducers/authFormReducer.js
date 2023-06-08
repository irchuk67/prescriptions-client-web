import {OPEN_AUTH_FORM, CLOSE_AUTH_FORM} from "../types";

const INITIAL_STATE = false
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_AUTH_FORM:
            return action.payload
        case CLOSE_AUTH_FORM:
            return action.payload
        default:
            return state
    }
}