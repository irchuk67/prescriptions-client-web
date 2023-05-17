import {GET_PATIENTS_LIST_FOR_DOCTOR} from "../types";

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case GET_PATIENTS_LIST_FOR_DOCTOR:
            return action.payload
        default:
            return state
    }
}