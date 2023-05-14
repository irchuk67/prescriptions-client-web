import React, {useState} from 'react';
import email from '../../assets/account.svg';
import {connect} from "react-redux";
import Menu from '../../components/menu/menu';
import {NavLink, Route, Routes} from "react-router-dom";
import './patient.scss';
import DoctorsList from "../../components/doctorsList/doctorsList";
import PatientAccount from "./patientAccount";

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
                        <Route path={'/doctors'} element={<DoctorsList/>}/>
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