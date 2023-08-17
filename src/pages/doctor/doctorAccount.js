import Account from "../../components/account/account";
import React from "react";
import clinic from "../../assets/ambulatory-clinic-svgrepo-com 1.svg";
import clinicAddress from "../../assets/address-svgrepo-com 1.svg";
import email from "../../assets/account.svg";
import {connect} from "react-redux";
import specialisation from "../../assets/doctor-male-svgrepo-com 1.svg";
import patientsList from "../../assets/patient-svgrepo-com 1.svg";
import {NavLink} from "react-router-dom";
import logOutIMG from "../../assets/log-out-outlined-svgrepo-com 1.svg";

const renderFields =  (patientAmount) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <React.Fragment>
            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={specialisation} alt={'specialisation'}/>
                    <p className={'account__field--name'}>Spetialisation: </p>
                </div>
                <p className={'account__field--value'}>{currentUser.specialisation}</p>
            </div>
            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={clinic} alt={'clinic'}/>
                    <p className={'account__field--name'}>Clinic: </p>
                </div>
                <p className={'account__field--value'}>{currentUser.clinic}</p>
            </div>

            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={clinicAddress} alt={'clinic address'}/>
                    <p className={'account__field--name'}>Clinic address: </p>
                </div>
                <p className={'account__field--value'}>{currentUser.clinicAddress}</p>
            </div>

            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={patientsList} alt={'patient list'}/>
                    <p className={'account__field--name'}>Number of patients: </p>
                </div>
                <p className={'account__field--value'}>{patientAmount}</p>
            </div>
            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={email} alt={'email'}/>
                    <p className={'account__field--name'}>Email: </p>
                </div>
                <p className={'account__field--value'}>{currentUser.email}</p>
            </div>
        </React.Fragment>
    )
}

const DoctorAccount = ({patientAmount}) => {
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <Account userData={userData} backPath={'/doctor/main'}>
            {renderFields(patientAmount)}
        </Account>
    )
}


export default DoctorAccount;