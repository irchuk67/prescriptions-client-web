import userImg from '../../assets/account.svg';
import logOutIMG from '../../assets/log-out-outlined-svgrepo-com 1.svg'
import './account.scss';
import {NavLink} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {cleanCurrentUserData, logOut} from "../../redux/actions";
import BackButton from "../backButton/backButton";
import React from "react";

const Account = (props) => {
    const currentUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
    const dispatch = useDispatch();
    const onLogOut = ( ) => {
        localStorage.setItem('token', '');
        localStorage.setItem('currentUser', JSON.stringify({}))
        dispatch(logOut());
        dispatch(cleanCurrentUserData());
    }
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
                {currentUserId === props.userData.userId && <NavLink className={'log-out'} to={'/'} onClick={onLogOut}><img src={logOutIMG} alt={'log out'}/>Log out</NavLink>}
            </div>
        </div>
    )
}

export default Account;