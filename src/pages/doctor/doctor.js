import React, {useState} from 'react';
import email from '../../assets/account.svg';
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";
import DoctorAccount from "./doctorAccount";
import PatientsList from "../../components/patientsList/patientsList";
import './doctor.scss';
import PatientItem from "../../components/patientItem/patientItem";
import {getDoctorPatientNumber} from "../../api";

const Doctor = () => {
    const [patientAmount, setPatientAmount] = useState(0);

    const navigate = useNavigate();
    const onOpenAccountClick = async () => {
        const patientsNum = await getDoctorPatientNumber(localStorage.getItem('token'));
        setPatientAmount(patientsNum)
        navigate('/doctor/account');
    }

    return (
        <Routes>
            <Route path={'/account'} element={<DoctorAccount patientAmount={patientAmount}/>}/>
            <Route path={'/main/*'} element={
                <div className={'doctor'}>
                    <img src={email}
                         alt={'personal account'}
                         className={'doctor__header--link'}
                         onClick={onOpenAccountClick}
                    />
                    <Routes>
                        <Route path={'/'} element={<PatientsList/>}/>
                        <Route path={'/:userId/*'} element={<PatientItem/>}/>
                    </Routes>
                </div>
            }/>
        </Routes>


    )
}


export default Doctor;