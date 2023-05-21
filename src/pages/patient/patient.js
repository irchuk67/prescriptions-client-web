import React, {useState} from 'react';
import email from '../../assets/account.svg';
import {connect} from "react-redux";
import Menu from '../../components/menu/menu';
import {NavLink, Route, Routes} from "react-router-dom";
import './patient.scss';
import DoctorsList from "../../components/doctorsList/doctorsList";
import PatientAccount from "./patientAccount";
import HistoryOfPrescriptions from "../../components/HistoryOfPrescriptions/HistoryOfPrescriptions";
import ListOfMedicines from "../../components/ListOfMedicines/ListOfMedicines";
import DailyPrescriptions from "../../components/dailyPrescriptions/dailyPrescriptions";

const Patient = () => {
    return (
        <Routes>
            <Route path={'/account'} element={<PatientAccount/>}/>
            <Route path={'/main/*'} element={
                <div className={'patient'}>
                    <div className={'patient__header'}>
                        <Menu/>
                        <NavLink to={"/patient/account"} className={'patient__header--link'}>
                            <img src={email}
                                 alt={'personal account'}/>
                        </NavLink>
                    </div>
                    <Routes>
                        <Route path={'/'} element={<DailyPrescriptions/>}/>
                        <Route path={'/doctors'} element={<DoctorsList/>}/>
                        <Route path={'/history'} element={<HistoryOfPrescriptions/>}/>
                        <Route path={'/medicines'} element={<ListOfMedicines/>}/>
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
export default connect(mapStateToProps)(Patient);