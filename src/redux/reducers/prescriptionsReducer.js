import {ADD_RECEIPT, DELETE_RECEIPT, GET_ALL_RECEIPTS, UPDATE_RECEIPT} from "../types";
import _ from 'lodash';

const INITIAL_STATE = []
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_RECEIPTS:
            return action.payload
        case DELETE_RECEIPT:
            return action.payload
        case ADD_RECEIPT:
            return action.payload
        case UPDATE_RECEIPT:
            return action.payload
        default:
            return state
    }
}

