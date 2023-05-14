import Button from "../../components/button/button";
import ReceiptsList from "../../components/receipts-list/receiptsList";
import AddReceipt from "../../components/addReceipt/addReceipt";
import UpdateReceipt from "../../components/updateReceipt/updateReceipt";
import React, {Component, useEffect, useState} from "react";
import {connect} from "react-redux";
import {getAllPrescriptions, getCurrentUserData, openAddForm} from "../../redux/actions";
import Patient from "../patient/patient";
import Doctor from "../doctor/doctor";

const MainScreen = (props) => {
    const [isListOpened, setIsListOpened] = useState(false);

    useEffect(() =>{
        const fetchUserData = async () => await props.getCurrentUserData(localStorage.getItem('token'));
        fetchUserData().catch(console.error)
    } , []);

    const onOpenListClick = () => {
        setIsListOpened(!isListOpened)
        props.getAllPrescriptions(localStorage.getItem('token'));
    }


    console.log(props.currentUserData)
    return(
        <React.Fragment>
            <div className={'container'}>
                {props.currentUserData.role === 'patient' && <Patient/>}
                {props.currentUserData.role === 'doctor' && <Doctor/>}
            </div>
        </React.Fragment>

    )

}

const mapStateToProps = (state) => {
    return{
        isAddFormOpen: state.isAddFormOpen,
        token: state.token,
        currentUserData: state.currentUserData
    }
}
export default connect(mapStateToProps, {getCurrentUserData, openAddForm, getAllPrescriptions})(MainScreen)