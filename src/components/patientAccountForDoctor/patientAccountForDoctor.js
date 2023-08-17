import Account from "../account/account";
import React from "react";
import height from "../../assets/height-svgrepo-com 1.svg";
import weight from "../../assets/weight-scale 1.svg";
import callendar from "../../assets/callendar.svg";
import {formatDate} from "../../format";
import gender from "../../assets/gender 1.svg";
import {connect, useSelector} from "react-redux";

const renderFields = (userData) => {
    return (
        <React.Fragment>
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
const PatientAccountForDoctor = () => {
    const userData = useSelector(state => state.viewedPatient)
    return(
        <Account userData={userData} backPath={`/doctor/main/${userData.userId}`}>
            {renderFields(userData)}
        </Account>
    )
}

export default PatientAccountForDoctor;