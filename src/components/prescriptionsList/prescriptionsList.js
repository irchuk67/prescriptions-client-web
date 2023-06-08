import React, {useEffect, useState} from "react";
import {deletePrescriptionById, getPrescriptions, getUserDataByToken} from "../../api";
import PrescriptionItem from "../prescriptionItem/prescriptionItem";
import './prescriptionsList.scss';
import {Dialog, Alert, AlertTitle} from "@mui/material";
import {connect} from "react-redux";
import {deletePrescriptionByID, getAllPrescriptions, openUpdateForm} from "../../redux/actions";

const PrescriptionsList = (props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleClose = () => {
        setIsDialogOpen(!isDialogOpen)
    }

    const onPrescriptionDelete = (id) => props.deletePrescriptionByID(id);

    const receiptList = props.receipts.map(prescription => {
        return (<PrescriptionItem key={prescription.id}
                     prescriptionData={prescription}
                     onItemDelete={onPrescriptionDelete}
                     id={prescription.id}
        />)
    });

    return (
        <div className={'prescriptionsList'}>
            <h1 className={'prescriptionsList__heading'}>History of prescriptions</h1>
            {receiptList}
            <Dialog
                open={isDialogOpen}
                onClose={handleClose}
            >
                <Alert severity="error" id={'alert-window'}>
                    <AlertTitle>Error</AlertTitle>
                    Something went wrong!!! Item wasn`t deleted
                </Alert>
            </Dialog>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        receipts: state.receipts,
        token: state.token
    }
}

export default connect(mapStateToProps, {getAllPrescriptions: getAllPrescriptions, deletePrescriptionByID, openUpdateForm})(PrescriptionsList);