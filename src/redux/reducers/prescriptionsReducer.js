import {ADD_PRESCRIPTION, DELETE_PRESCRIPTION, GET_ALL_PRESCRIPTIONS, UPDATE_PRESCRIPTION} from "../types";

const INITIAL_STATE = []
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_PRESCRIPTIONS:
            return action.payload
        case DELETE_PRESCRIPTION:
            return action.payload
        case ADD_PRESCRIPTION:
            return action.payload
        case UPDATE_PRESCRIPTION:
            return action.payload
        default:
            return state
    }
}

