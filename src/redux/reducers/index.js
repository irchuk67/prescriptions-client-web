import receiptsReducer from "./receiptsReducer";
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import addFormReducer from "./addFormReducer";
import updateFormReducer from "./updateFormReducer";
import registerFormReducer from "./registerFormReducer";
import authFormReducer from "./authFormReducer";
import tokenReducer from "./tokenReducer";
import currentUserDataReducer from "./currentUserDataReducer";
import doctorsReducer from "./doctorsReducer";
import MenuReducer from "./menuReducer";

export default combineReducers({
    receipts: receiptsReducer,
    isAddFormOpen: addFormReducer,
    isUpdateFormOpen: updateFormReducer,
    form: formReducer,
    isRegisterFormOpen: registerFormReducer,
    isAuthFormOpen: authFormReducer,
    token: tokenReducer,
    currentUserData: currentUserDataReducer,
    doctors: doctorsReducer,
    isMenuOpen: MenuReducer
})