import BackButton from "../backButton/backButton";
import {connect} from "react-redux";
import {NavLink, Routes, Route, useNavigate} from "react-router-dom";
import Button from '../button/button';
import {useState} from "react";
import PrescriptionsList from "../prescriptionsList/prescriptionsList";
import {getAllPrescriptions, getPatientForDoctorById, openAddForm} from "../../redux/actions";
import AddReceipt from "../addReceipt/addReceipt";
import './patientItem.scss';
import PatientAccountForDoctor from "../patientAccountForDoctor/patientAccountForDoctor";

const PatientItem = (props) => {
    const path = window.location.pathname.split('/');
    const patientId = path[3];
    const currentPatient = JSON.parse(localStorage.getItem('currentPatient'));
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const navigate = useNavigate();

    const onShowHistoryClick = async () => {
        await props.getAllPrescriptions(localStorage.getItem('token'), patientId);
        setIsHistoryOpen(!isHistoryOpen)
    }


    const onGetUserData = async () => {
        await props.getPatientForDoctorById(patientId, localStorage.getItem('token'));
        navigate(`/doctor/main/${patientId}/data`)
    }

    return(
        <div className={'patient-item'}>
            <BackButton backPath={'/doctor/main'}/>
            <div className={'patient-item__header'}>
                <p className={'patient-item__heading'}>{currentPatient.name} {currentPatient.surname} {currentPatient.middleName}</p>
                <div className={'patient-item__buttons'}>
                    <Button className={'button button__green'} onButtonClick={() => onGetUserData()}>Patient`s data</Button>
                    <Button className={'button button__green'} onButtonClick={() => onShowHistoryClick()}>
                        {isHistoryOpen ?
                            <div>
                                <p>
                                    hide prescriptions
                                </p>
                            </div>
                            :
                            <div>
                                <p>
                                    Show all prescriptions
                                </p>
                            </div>
                        }
                    </Button>
                    <Button className={'button button__pink'} onButtonClick={() => props.openAddForm()}>Add prescription</Button>
                </div>
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