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
        <div className={'prescription-item'}>
            <p className={'prescription-item__title'}>{prescriptionData.title}</p>
            {isUpdateOpen && <UpdatePrescription/>}

            <div className={'prescription-item__icons'}>
                <Edit onClick={() => onUpdateClick(id, prescriptionData)} sx={{fontSize: 20, marginRight: 1}}/>
                <Delete color={"error"} onClick={() => deletePrescriptionByID(id, localStorage.getItem('token'), assigneeId)} sx={{fontSize: 20}}/>
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