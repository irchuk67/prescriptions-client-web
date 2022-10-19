import {ADD_RECEIPT, DELETE_RECEIPT, GET_ALL_RECEIPTS, UPDATE_RECEIPT} from "../types";
import _ from 'lodash';

const INITIAL_STATE = []
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_RECEIPTS:
            return [...state, ...action.payload]
        case DELETE_RECEIPT:
            return state.filter(receipt => receipt.id !== action.payload)
        case ADD_RECEIPT:
            if(state.length === 0){
                return state
            }
            return [...state, action.payload]
        case UPDATE_RECEIPT:
            return state.map(reseipt => {
                return reseipt.id === action.payload._id ? {id: action.payload._id, text: action.payload.text} : reseipt
            })
        default:
            return state
    }
}

