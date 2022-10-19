import receiptsReducer from "./receiptsReducer";
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import addFormReducer from "./addFormReducer";
import updateFormReducer from "./updateFormReducer";

export default combineReducers({
    receipts: receiptsReducer,
    isAddFormOpen: addFormReducer,
    isUpdateFormOpen: updateFormReducer,
    form: formReducer
})