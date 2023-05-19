import Account from "../../components/account/account";
import React from "react";
import clinic from "../../assets/ambulatory-clinic-svgrepo-com 1.svg";
import clinicAddress from "../../assets/address-svgrepo-com 1.svg";
import email from "../../assets/account.svg";
import height from "../../assets/height-svgrepo-com 1.svg";
import weight from "../../assets/weight-scale 1.svg";
import callendar from "../../assets/callendar.svg";
import gender from "../../assets/gender 1.svg";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import logOutIMG from "../../assets/log-out-outlined-svgrepo-com 1.svg";
import {formatDate} from "../../format";

const renderFields = (userData) => {
    return (
        <React.Fragment>
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
                    <img className={'account__field--img'} src={email} alt={'email'}/>
                    <p className={'account__field--name'}>Email: </p>
                </div>
                <p className={'account__field--value'}>{userData.email}</p>
            </div>

            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={height} alt={'height'}/>
                    <p className={'account__field--name'}>Height: </p>
                </div>
                <p className={'account__field--value'}>{userData.height} sm</p>
            </div>

            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={weight} alt={'weight'}/>
                    <p className={'account__field--name'}>Weight: </p>
                </div>
                <p className={'account__field--value'}>{userData.weight} kg</p>
            </div>

            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={callendar} alt={'callendar'}/>
                    <p className={'account__field--name'}>Date of birth: </p>
                </div>
                <p className={'account__field--value'}>{formatDate(userData.birthDate)}</p>
            </div>

            <div className={'account__field'}>
                <div className={'account__field--naming'}>
                    <img className={'account__field--img'} src={gender} alt={'gender'}/>
                    <p className={'account__field--name'}>Gender: </p>
                </div>
                <p className={'account__field--value'}>{userData.sex}</p>
            </div>
        </React.Fragment>
    )
}

const PatientAccount = (props) => {
      return (
        <Account userData={props.userData} backPath={'/patient/main'}>
            {renderFields(props.userData)}
        </Account>
    )
}


const mapStateToProps = state => {
    return {
        userData: JSON.parse(localStorage.getItem('currentUser'))
    }
}
export default connect(mapStateToProps)(PatientAccount);