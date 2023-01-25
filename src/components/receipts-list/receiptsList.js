import React, {useEffect, useState} from "react";
import {deleteReceiptById, getReceipts} from "../../api";
import ReceiptItem from "../receipt-item/receiptItem";
import './receiptsList.scss';
import {Dialog, Alert, AlertTitle} from "@mui/material";
import {connect} from "react-redux";
import {deleteReceiptByID, getAllReceipts, openUpdateForm} from "../../redux/actions";

const ReceiptsList = (props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleClose = () => {
        setIsDialogOpen(!isDialogOpen)
    }

    const onReceiptDelete = (id) => props.deleteReceiptByID(id);

    const receiptList = props.receipts.map(receipt => {
        return (<ReceiptItem key={receipt.id}
                     text={receipt.text}
                     onItemDelete={onReceiptDelete}
                     id={receipt.id}
        />)
    });

    return (
        <div className={'receipts-list'}>
            <h1 className={'receipts-list__heading'}>Receipts list</h1>
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
        receipts: state.receipts
    }
}

export default connect(mapStateToProps, {getAllReceipts, deleteReceiptByID, openUpdateForm})(ReceiptsList);