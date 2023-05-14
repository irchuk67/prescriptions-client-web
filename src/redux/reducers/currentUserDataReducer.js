import {CLEAN_CURRENT_USER_DATA, GET_CURRENT_USER_DATA} from "../types";

const INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_CURRENT_USER_DATA:
            return action.payload
        case CLEAN_CURRENT_USER_DATA:
            return action.payload
        default:
            return state
    }
}