import React, {useEffect, useState} from "react";
import {deletePrescriptionById, getPrescriptions, getUserDataByToken} from "../../api";
import PrescriptionItem from "../receipt-item/receiptItem";
import './receiptsList.scss';
import {Dialog, Alert, AlertTitle} from "@mui/material";
import {connect} from "react-redux";
import {deletePrescriptionByID, getAllPrescriptions, openUpdateForm} from "../../redux/actions";

const PrescriptionsList = (props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleClose = () => {
        setIsDialogOpen(!isDialogOpen)
    }

    const onPrescriptionDelete = (id) => props.deletePrescriptionByID(id);

    const receiptList = props.receipts.map(receipt => {
        return (<PrescriptionItem key={receipt.id}
                     text={receipt.text}
                     onItemDelete={onPrescriptionDelete}
                     id={receipt.id}
        />)
    });

    return (
        <div className={'receipts-list'}>
            <h1 className={'receipts-list__heading'}>Prescriptions list</h1>
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