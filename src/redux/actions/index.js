import {
    getPrescriptions,
    deletePrescriptionById,
    createPrescription,
    updatePrescription,
    logInUser,
    getUserDataByToken, getDoctors, getDoctorPatients
} from "../../api";
import {
    ADD_RECEIPT, CLEAN_CURRENT_USER_DATA,
    CLOSE_ADD_FORM, CLOSE_AUTH_FORM, CLOSE_MENU, CLOSE_REGISTER_FORM, CLOSE_UPDATE_FORM,
    DELETE_RECEIPT,
    GET_ALL_RECEIPTS, GET_CURRENT_USER_DATA, GET_DOCTORS_LIST, GET_PATIENTS_LIST_FOR_DOCTOR, LOG_IN, LOG_OUT,
    OPEN_ADD_FORM, OPEN_AUTH_FORM, OPEN_MENU, OPEN_REGISTER_FORM,
    OPEN_UPDATE_FORM,
    UPDATE_RECEIPT
} from "../types";

const getAllPrescriptions = (token, assigneeId) => async (dispatch) => {
    const receipts = await getPrescriptions(token, assigneeId);
    dispatch({
        type: GET_ALL_RECEIPTS,
        payload: receipts.data
    })
}

const deletePrescriptionByID = (id, token, assigneeId) => async dispatch => {
    await deletePrescriptionById(id, token);
    const receipts = await getPrescriptions(token, assigneeId);
    dispatch({
        type: DELETE_RECEIPT,
        payload: receipts.data
    })
}

const addNewPrescription = (prescription, token, assigneeId) => async dispatch => {
    await createPrescription(prescription, token);
    const receipts = await getPrescriptions(token, assigneeId);
    dispatch({
        type: ADD_RECEIPT,
        payload: receipts.data
    })
}

const editPrescription = (id, prescription, token, assigneeId) => async dispatch => {
    const response = await updatePrescription(id, prescription, token);
    const receipts = await getPrescriptions(token, assigneeId);
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
    localStorage.setItem('token', '')

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

//doctor
const getPatientsListForDoctor = (token, searchField, sortField) => async dispatch => {
    const patients = await getDoctorPatients(token, searchField, sortField);
    console.log(patients.data)
    dispatch({
            type: GET_PATIENTS_LIST_FOR_DOCTOR,
            payload: patients.data
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

const openUpdateForm = (id, prescription) => {
    return {
        type: OPEN_UPDATE_FORM,
        payload: {
            isOpen: true,
            id,
            prescription
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
    closeMenu,
    getPatientsListForDoctor
}