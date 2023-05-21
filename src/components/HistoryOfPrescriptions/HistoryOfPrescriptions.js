import {NavLink} from "react-router-dom";
import Button from "../button/button";
import React, {useEffect} from "react";
import PrescriptionsList from "../prescriptionsList/prescriptionsList";
import {connect} from "react-redux";
import {getAllPrescriptions} from "../../redux/actions";
import './HistoryOfPrescriptions.scss';
import {formatDate} from "../../format";

const renderPrescriptions = (prescriptions) => {
    return prescriptions.map(
        prescription => {
            return(
                <div className={'prescription'}>
                    <p className={'prescription__title'}>{prescription.title}</p>
                    <p className={'prescription__date'}>{formatDate(prescription.startDate)}</p>
                </div>
            )
        }

    )
}
const HistoryOfPrescriptions = (props) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    useEffect(() => {
        const getPrescriptions = async () => {
            return await props.getAllPrescriptions(localStorage.getItem('token'), currentUser.userId);
        }
        getPrescriptions().catch(err => console.log(err))
    }, [])
    return (
        <div className={'history'}>
            <div className={'history__header'}>
                <h3 className={'history__title'}>History of prescriptions</h3>
                <NavLink to={'/patient/main'}>
                    <Button className={'button button__green history__button'}>Go to daily receipts</Button></NavLink>
            </div>
            {renderPrescriptions(props.prescriptions)}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        prescriptions: state.receipts
    }
}

export default connect(mapStateToProps, {getAllPrescriptions})(HistoryOfPrescriptions);