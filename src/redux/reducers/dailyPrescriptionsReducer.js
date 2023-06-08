import {
    CHANGE_PRESCRIPTION_STATUS,
    GET_DAILY_PRESCRIPTIONS,
} from "../types";

const INITIAL_STATE = []
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DAILY_PRESCRIPTIONS:
            return action.payload;
        case CHANGE_PRESCRIPTION_STATUS:
            return state.map(prescription => {
                if(prescription.id === action.payload.id){
                    prescription = action.payload
                }
                return prescription
            })
        default:
            return state
    }
}

