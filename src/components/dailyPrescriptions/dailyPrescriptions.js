import React, {useEffect} from "react";
import {connect} from "react-redux";
import {changePrescriptionIsReady, getDailyPrescriptionsList} from "../../redux/actions";
import {changePrescriptionStatus} from "../../api";
import './dailyPrescriptions.scss';

const renderPrescriptions = (prescriptions, onClick) => {
    return prescriptions.map(
        prescription => {
            return(
                <div className={'daily-prescriptions__prescription'}>
                    <div className={'daily-prescriptions__prescription__info'}>
                        <p className={'daily-prescriptions__prescription__title'}>{prescription.title}</p>
                        <p className={'daily-prescriptions__prescription__description'}>{prescription.description}</p>
                    </div>

                    <input type={'checkbox'} className={'daily-prescriptions__prescription__done'}
                           checked={prescription.isReady} onChange={() => onClick(prescription.id)}/>
                </div>
            )
        }
    )
}
const DailyPrescriptions = (props) => {
    useEffect(() => {
        const getDailyPrescriptions = async () => {
            return await props.getDailyPrescriptionsList(localStorage.getItem('token'))
        }
        getDailyPrescriptions().catch(err => console.log(err))
    }, [])

    const onPrescriptionClick = async (prescriptionId) => {
        console.log(prescriptionId)
        await props.changePrescriptionIsReady(
            prescriptionId,
            localStorage.getItem('token')
        )
    }

    return(
        <div className={'daily-prescriptions'}>
            <h3 className={'daily-prescriptions__title'}>Daily prescriptions</h3>
            {renderPrescriptions(props.dailyPrescriptions, onPrescriptionClick)}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        dailyPrescriptions: state.dailyPrescriptions
    }
}
export default connect(mapStateToProps, {getDailyPrescriptionsList, changePrescriptionIsReady})(DailyPrescriptions);