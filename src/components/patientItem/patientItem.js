import BackButton from "../backButton/backButton";
import {connect} from "react-redux";
import {NavLink, Routes, Route} from "react-router-dom";
import Button from '../button/button';
import {useState} from "react";
import PrescriptionsList from "../prescriptionsList/prescriptionsList";
import {getAllPrescriptions, getPatientForDoctorById, openAddForm} from "../../redux/actions";
import AddReceipt from "../addReceipt/addReceipt";
import './patientItem.scss';
import UpdatePrescription from "../updateReceipt/updateReceipt";
import PatientAccountForDoctor from "../patientAccountForDoctor/patientAccountForDoctor";

const PatientItem = (props) => {
    const path = window.location.pathname.split('/');
    const patientId = path[3];
    const currentPatient = JSON.parse(localStorage.getItem('currentPatient'));
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);

    const onShowHistoryClick = async () => {
        await props.getAllPrescriptions(localStorage.getItem('token'), patientId);
        setIsHistoryOpen(!isHistoryOpen)
    }

    const onGetUserData = async () => {
        await props.getPatientForDoctorById(patientId, localStorage.getItem('token'))
    }

    return(
        <div className={'patient-item'}>
            <BackButton backPath={'/doctor/main'}/>
            <div className={'patient-item__header'}>
                <p className={'patient-item__heading'}>{currentPatient.name} {currentPatient.surname} {currentPatient.middleName}</p>
                <NavLink to={`/doctor/main/${patientId}/data`}>
                    <Button className={'button button__green'} onButtonClick={() => onGetUserData()}>Patient`s data</Button>
                </NavLink>
                <Button className={'button button__green'} onButtonClick={() => onShowHistoryClick()}>
                    {isHistoryOpen ?
                        <div>
                            <p>
                                hide receipts
                            </p>
                        </div>
                        :
                        <div>
                            <p>
                                Show all receipts
                            </p>
                        </div>
                    }
                </Button>
                <Button className={'button button__pink'} onButtonClick={() => props.openAddForm()}>Add prescription</Button>
            </div>
            {isHistoryOpen && <PrescriptionsList/>}
            {props.isAddFormOpen && <AddReceipt/>}
            <Routes>
                <Route path={'/data'} element={<PatientAccountForDoctor/>}/>
            </Routes>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        patients: state.patients,
        isAddFormOpen: state.isAddFormOpen
    }
}
export default connect(mapStateToProps, {getAllPrescriptions, openAddForm, getPatientForDoctorById})(PatientItem)