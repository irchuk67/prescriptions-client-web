import userImg from '../../assets/account.svg';
import logOutIMG from '../../assets/log-out-outlined-svgrepo-com 1.svg'
import './account.scss';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {cleanCurrentUserData, logOut} from "../../redux/actions";
import BackButton from "../backButton/backButton";

const Account = (props) => {

    return (
        <div className={'account'}>
            <BackButton backPath={props.backPath}/>
            <div className={'account__data'}>
                <div>
                    <div className={'account__personal-info'}>
                        <img src={userImg} alt={'user icon'}/>
                        <div className={'account__personal-info--data'}>
                            <h3>{props.userData.name} {props.userData.surname}</h3>
                            <p>{props.userData.phoneNumber}</p>
                        </div>
                    </div>
                    <div className={'account__additional-fields'}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {logOut, cleanCurrentUserData})(Account)