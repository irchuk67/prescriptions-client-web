import {GET_PATIENT_DATA_FOR_DOCTOR} from "../types";

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case GET_PATIENT_DATA_FOR_DOCTOR:
            return action.payload
        default:
            return state
    }
}