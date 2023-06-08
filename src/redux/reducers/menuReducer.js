import {OPEN_MENU, CLOSE_MENU} from "../types";

const INITIAL_STATE = false
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_MENU:
            return action.payload
        case CLOSE_MENU:
            return action.payload
        default:
            return state
    }
}