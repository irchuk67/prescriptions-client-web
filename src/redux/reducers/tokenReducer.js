import {LOG_IN, LOG_OUT} from "../types";

const INITIAL_STATE = '';
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.payload
        case LOG_OUT:
            return action.payload
        default:
            return state
    }
}