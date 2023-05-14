import React from 'react';
import Account from "../../components/account/account";
import specialisation from '../../assets/doctor-male-svgrepo-com 1.svg'
import clinic from '../../assets/ambulatory-clinic-svgrepo-com 1.svg';
import clinicAddress from '../../assets/address-svgrepo-com 1.svg';
import patientsList from '../../assets/patient-svgrepo-com 1.svg'
import email from '../../assets/account.svg';
import {connect} from "react-redux";

const renderFields = (userData) => {
    return (
        <React.Fragment>
            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={specialisation} alt={'specialisation'}/>
                    <p className={'account__field--name'}>Spetialisation: </p>
                </div>
                <p className={'account__field--value'}>{userData.specialisation}</p>
            </div>
            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={clinic} alt={'clinic'}/>
                    <p className={'account__field--name'}>Clinic: </p>
                </div>
                <p className={'account__field--value'}>{userData.clinic}</p>
            </div>

            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={clinicAddress} alt={'clinic address'}/>
                    <p className={'account__field--name'}>Clinic address: </p>
                </div>
                <p className={'account__field--value'}>{userData.clinicAddress}</p>
            </div>

            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={patientsList} alt={'patient list'}/>
                    <p className={'account__field--name'}>Number of patients: </p>
                </div>
                <p className={'account__field--value'}>10</p>
            </div>
            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={email} alt={'email'}/>
                    <p className={'account__field--name'}>Email: </p>
                </div>
                <p className={'account__field--value'}>{userData.email}</p>
            </div>
        </React.Fragment>
    )
}

const Doctor = (props) => {
    return (
        <Account userData={props.userData}>
            {renderFields(props.userData)}
        </Account>
    )
}


const mapStateToProps = state => {
    return {
        userData: state.currentUserData
    }
}
export default connect(mapStateToProps)(Doctor);