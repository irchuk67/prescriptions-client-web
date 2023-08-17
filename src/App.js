import React, {useEffect, useRef, useState} from "react";
import './base.scss';
import {connect, useSelector} from "react-redux";
import {getAllPrescriptions, openAddForm} from "./redux/actions";
import StartScreen from "./pages/startScreen/startScreen";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Patient from "./pages/patient/patient";
import Doctor from "./pages/doctor/doctor";

const App = () => {
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


const ProtectedRoute = ({token, allowed, children}) => {
    if (!token || !allowed) {
        return <Navigate to="/" replace/>;
    }

    return children;
};

export default App;