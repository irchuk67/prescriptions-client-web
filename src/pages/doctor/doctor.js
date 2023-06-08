import React, {useState} from 'react';
import email from '../../assets/account.svg';
import {connect} from "react-redux";
import {NavLink, Route, Routes} from "react-router-dom";
import DoctorAccount from "./doctorAccount";
import PatientsList from "../../components/patientsList/patientsList";
import './doctor.scss';
import PatientItem from "../../components/patientItem/patientItem";
import PatientAccountForDoctor from "../../components/patientAccountForDoctor/patientAccountForDoctor";
const Doctor = () => {
    return (
        <Routes>
            <Route path={'/account'} element={<DoctorAccount/>}/>
            <Route path={'/main/*'} element={
                <div className={'doctor'}>
                    <NavLink to={"/doctor/account"} className={'doctor__header--link'}>
                        <img src={email}
                             alt={'personal account'}/>
                    </NavLink>
                    <Routes>
                        <Route path={'/'} element={<PatientsList/>}/>
                        <Route path={'/:userId/*'} element={<PatientItem/>}/>
                    </Routes>
                </div>
            }/>
        </Routes>


    )
}


const mapStateToProps = state => {
    return {
        userData: state.currentUserData
    }
}
export default connect(mapStateToProps)(Doctor);