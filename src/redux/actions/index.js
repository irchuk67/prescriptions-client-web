import {
    getPrescriptions,
    deletePrescriptionById,
    createPrescription,
    updatePrescription,
    logInUser,
    getUserDataByToken,
    getDoctors,
    getDoctorPatients,
    getDoctorPatientById,
    getDailyPrescriptions,
    changePrescriptionStatus
} from "../../api";
import {
    ADD_PRESCRIPTION, CHANGE_PRESCRIPTION_STATUS,
    CLEAN_CURRENT_USER_DATA,
    CLOSE_ADD_FORM,
    CLOSE_AUTH_FORM,
    CLOSE_MENU,
    CLOSE_REGISTER_FORM,
    CLOSE_UPDATE_FORM,
    DELETE_PRESCRIPTION,
    GET_ALL_PRESCRIPTIONS,
    GET_CURRENT_USER_DATA, GET_DAILY_PRESCRIPTIONS,
    GET_DOCTORS_LIST,
    GET_PATIENT_DATA_FOR_DOCTOR,
    GET_PATIENTS_LIST_FOR_DOCTOR,
    LOG_IN,
    LOG_OUT,
    OPEN_ADD_FORM,
    OPEN_AUTH_FORM,
    OPEN_MENU,
    OPEN_REGISTER_FORM,
    OPEN_UPDATE_FORM,
    UPDATE_PRESCRIPTION
} from "../types";

const getAllPrescriptions = (token, assigneeId) => async (dispatch) => {
    const prescriptions = await getPrescriptions(token, assigneeId);
    dispatch({
        type: GET_ALL_PRESCRIPTIONS,
        payload: prescriptions.data
    })
}

const getDailyPrescriptionsList = (token) => async (dispatch) => {
    const prescriptions = await getDailyPrescriptions(token);
    dispatch({
        type: GET_DAILY_PRESCRIPTIONS,
        payload: prescriptions.data
    })
}

const deletePrescriptionByID = (id, token, assigneeId) => async dispatch => {
    await deletePrescriptionById(id, token);
    const receipts = await getPrescriptions(token, assigneeId);
    dispatch({
        type: DELETE_PRESCRIPTION,
        payload: receipts.data
    })
}

const changePrescriptionIsReady = (id, token) => async dispatch => {
    const updatedPrescription = await changePrescriptionStatus(token, id);
    dispatch({
        type: CHANGE_PRESCRIPTION_STATUS,
        payload: updatedPrescription.data
    })
}

const addNewPrescription = (prescription, token, assigneeId) => async dispatch => {
    await createPrescription(prescription, token);
    const receipts = await getPrescriptions(token, assigneeId);
    dispatch({
        type: ADD_PRESCRIPTION,
        payload: receipts.data
    })
}

const editPrescription = (id, prescription, token, assigneeId) => async dispatch => {
    const response = await updatePrescription(id, prescription, token);
    const receipts = await getPrescriptions(token, assigneeId);
    dispatch({
        type: UPDATE_PRESCRIPTION,
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

const getPatientForDoctorById = (id, token) => async dispatch => {
    const patients = await getDoctorPatientById(id, token);
    console.log(patients.data)
    dispatch({
            type: GET_PATIENT_DATA_FOR_DOCTOR,
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
    getPatientsListForDoctor,
    getPatientForDoctorById,
    getDailyPrescriptionsList,
    changePrescriptionIsReady
}