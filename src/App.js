import React, {useEffect, useRef, useState} from "react";
import './base.scss';
import {connect} from "react-redux";
import {getAllPrescriptions, openAddForm} from "./redux/actions";
import StartScreen from "./pages/startScreen/startScreen";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import MainScreen from "./pages/mainScreen/mainScreen";
import Patient from "./pages/patient/patient";
import PatientAccount from "./pages/patient/patientAccount";
import DoctorsList from "./components/doctorsList/doctorsList";
import Doctor from "./pages/doctor/doctor";

const App = (props) => {
    const token = localStorage.getItem('token');
    const role = JSON.parse(localStorage.getItem('currentUser'))?.role;
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<StartScreen/>}/>
                <Route path={'/patient/*'} element={
                    <ProtectedRoute token={token}
                                    allowed={role === 'patient'}>
                        <Patient/>
                    </ProtectedRoute>}/>
                <Route path={'/doctor/*'} element={
                    <ProtectedRoute token={token}
                                    allowed={role === 'doctor'}>
                        <Doctor/>
                    </ProtectedRoute>}/>
            </Routes>
        </BrowserRouter>
    )
}


const ProtectedRoute = ({ token, allowed, children }) => {
    if (!token || !allowed) {
        return <Navigate to="/" replace />;
    }

    return children;
};
const mapStateToProps = state => {
    return {
        receipts: state.receipts,
        isAddFormOpened: state.isAddFormOpen,
        isUpdateFormOpened: state.isUpdateFormOpen,
        token: state.token,
        userRole: state.currentUserData.role
    }
}

export default connect(mapStateToProps, {getAllReceipts: getAllPrescriptions, openAddForm})(App)