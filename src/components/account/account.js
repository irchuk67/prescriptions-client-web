import userImg from '../../assets/account.svg';
import logOutIMG from '../../assets/log-out-outlined-svgrepo-com 1.svg'
import './account.scss';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {cleanCurrentUserData, logOut} from "../../redux/actions";

const Account = (props) => {
    const onLogOut = ( ) => {
        localStorage.setItem('token', '');
        props.logOut();
        props.cleanCurrentUserData();
    }
    return (
        <div className={'account'}>
            <NavLink className={'account__back-button'} to={props.backPath}><span>&larr;</span>Back</NavLink>
            <div className={'account__data'}>

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
                <NavLink className={'log-out'} to={'/'} onClick={onLogOut}><img src={logOutIMG} alt={'log out'}/>Log out</NavLink>
            </div>
        </div>
    )
}

export default connect(null, {logOut, cleanCurrentUserData})(Account)