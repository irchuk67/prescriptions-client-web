import React from "react";
import {Delete, Edit} from "@mui/icons-material";
import './prescriptionItem.scss';
import {connect} from "react-redux";
import {openUpdateForm, deletePrescriptionByID} from "../../redux/actions";
import UpdatePrescription from "../updateReceipt/updateReceipt";

const PrescriptionItem = ({prescriptionData, deletePrescriptionByID, id, openUpdateForm, isUpdateOpen}) => {
    const path = window.location.pathname.split('/');
    const assigneeId = path[path.length - 1];
    const onUpdateClick = (id, prescriptionData) => {
        openUpdateForm(id, prescriptionData)
    }
    return(
        <div className={'receipt-item'}>
            {prescriptionData.title}
            {isUpdateOpen && <UpdatePrescription/>}

            <div className={'receipt-item__icons'}>
                <Edit onClick={() => onUpdateClick(id, prescriptionData)}/>
                <Delete color={"error"} onClick={() => deletePrescriptionByID(id, localStorage.getItem('token'), assigneeId)}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isUpdateOpen: state.isUpdateFormOpen.isOpen,
    }
}
export default connect(mapStateToProps, {openUpdateForm, deletePrescriptionByID})(PrescriptionItem);