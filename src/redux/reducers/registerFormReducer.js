import {OPEN_REGISTER_FORM, CLOSE_REGISTER_FORM} from "../types";

const INITIAL_STATE = false
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_REGISTER_FORM:
            return action.payload
        case CLOSE_REGISTER_FORM:
            return action.payload
        default:
            return state
    }
}