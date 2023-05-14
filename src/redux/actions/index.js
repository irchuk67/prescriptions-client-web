import {
    getPrescriptions,
    deletePrescriptionById,
    createPrescription,
    updatePrescription,
    logInUser,
    getUserDataByToken, getDoctors
} from "../../api";
import {
    ADD_RECEIPT, CLEAN_CURRENT_USER_DATA,
    CLOSE_ADD_FORM, CLOSE_AUTH_FORM, CLOSE_MENU, CLOSE_REGISTER_FORM, CLOSE_UPDATE_FORM,
    DELETE_RECEIPT,
    GET_ALL_RECEIPTS, GET_CURRENT_USER_DATA, GET_DOCTORS_LIST, LOG_IN, LOG_OUT,
    OPEN_ADD_FORM, OPEN_AUTH_FORM, OPEN_MENU, OPEN_REGISTER_FORM,
    OPEN_UPDATE_FORM,
    UPDATE_RECEIPT
} from "../types";

const getAllPrescriptions = (token) => async (dispatch) => {
    const receipts = await getPrescriptions(token);
    dispatch({
        type: GET_ALL_RECEIPTS,
        payload: receipts.data
    })
}

const deletePrescriptionByID = (id, token) => async dispatch => {
    await deletePrescriptionById(id);
    dispatch({
        type: DELETE_RECEIPT,
        payload: id
    })
}

const addNewPrescription = (text, token) => async dispatch => {
    const result = await createPrescription(text);
    dispatch({
        type: ADD_RECEIPT,
        payload: result.data
    })
}

const editPrescription = (id, text, token) => async dispatch => {
    const response = await updatePrescription(id, text);
    dispatch({
        type: UPDATE_RECEIPT,
        payload: response.data
    })
}

//user handling
const logIn = (userData) => async dispatch => {
    const response = await logInUser(userData);
    localStorage.setItem('token', response.data.token)
    dispatch({
        type: LOG_IN,
        payload: response.data.token
    })
}


const getCurrentUserData = (token) => async dispatch => {
    console.log('getting data')
    const response = await getUserDataByToken(token);
    localStorage.setItem('currentUser', JSON.stringify(response.data) )
    dispatch({
        type: GET_CURRENT_USER_DATA,
        payload: response.data
    })
}

const logOut = () => async dispatch => {
    dispatch({
        type: LOG_OUT,
        payload: ''
    })
}

const cleanCurrentUserData = () => async dispatch => {
    dispatch({
        type: CLEAN_CURRENT_USER_DATA,
        payload: {}
    })
}

//patient
const getDoctorsList = (clinic, clinicAddress, token, searchField, sortField) => async dispatch => {
    const doctors = await getDoctors(clinic, clinicAddress, token, searchField, sortField);
    console.log(doctors.data)
    dispatch({
            type: GET_DOCTORS_LIST,
            payload: doctors.data
        }
    )
}

//forms open-close
const openAddForm = () => {
    return {
        type: OPEN_ADD_FORM,
        payload: true
    }
}

const closeAddForm = () => {
    return {
        type: CLOSE_ADD_FORM,
        payload: false
    }
}

const openUpdateForm = (id, text) => {
    return {
        type: OPEN_UPDATE_FORM,
        payload: {
            isOpen: true,
            id,
            text
        }
    }
}

const closeUpdateForm = () => {
    return {
        type: CLOSE_UPDATE_FORM,
        payload: {
            isOpen: false
        }
    }
}

const openRegisterForm = () => {
    return {
        type: OPEN_REGISTER_FORM,
        payload: {
            isOpen: true
        }
    }
}

const closeRegisterForm = () => {
    return {
        type: CLOSE_REGISTER_FORM,
        payload: {
            isOpen: false
        }
    }
}

const openAuthForm = () => {
    return {
        type: OPEN_AUTH_FORM,
        payload: {
            isOpen: true
        }
    }
}

const closeAuthForm = () => {
    return {
        type: CLOSE_AUTH_FORM,
        payload: {
            isOpen: false
        }
    }
}

//menu
const openMenu = () => {
    return {
        type: OPEN_MENU,
        payload: {
            isOpen: true
        }
    }
}

const closeMenu = () => {
    return {
        type: CLOSE_MENU,
        payload: {
            isOpen: false
        }
    }
}

export {
    getAllPrescriptions,
    deletePrescriptionByID,
    addNewPrescription,
    editPrescription,
    openAddForm,
    closeAddForm,
    openUpdateForm,
    closeUpdateForm,
    openAuthForm,
    closeAuthForm,
    openRegisterForm,
    closeRegisterForm,
    logIn,
    logOut,
    cleanCurrentUserData,
    getCurrentUserData,
    getDoctorsList,
    openMenu,
    closeMenu
}