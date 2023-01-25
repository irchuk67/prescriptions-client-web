import {getReceipts, deleteReceiptById, createReceipt, updateReceipt} from "../../api";
import {
    ADD_RECEIPT,
    CLOSE_ADD_FORM, CLOSE_UPDATE_FORM,
    DELETE_RECEIPT,
    GET_ALL_RECEIPTS,
    OPEN_ADD_FORM,
    OPEN_UPDATE_FORM,
    UPDATE_RECEIPT
} from "../types";

const getAllReceipts = () => async dispatch => {
    const receipts = await getReceipts();
    dispatch({
        type: GET_ALL_RECEIPTS,
        payload: receipts.data
    })
}

const deleteReceiptByID = (id) => async dispatch => {
    await deleteReceiptById(id);
    dispatch({
        type: DELETE_RECEIPT,
        payload: id
    })
}

const addNewReceipt = (text) => async dispatch => {
    const result = await createReceipt(text);
    dispatch({
        type: ADD_RECEIPT,
        payload: result.data
    })
}

const editReceipt = (id, text) => async dispatch => {
    const response = await updateReceipt(id, text);
    dispatch({
        type: UPDATE_RECEIPT,
        payload: response.data
    })
}

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
export {
    getAllReceipts,
    deleteReceiptByID,
    addNewReceipt,
    editReceipt,
    openAddForm,
    closeAddForm,
    openUpdateForm,
    closeUpdateForm
}