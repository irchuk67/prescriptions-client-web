import React from "react";
import medicalPrescription from '../../assets/medical-prescription-svgrepo-com 1.svg';
import Button from "../../components/button/button";
import './startScreen.scss';
import {connect, useDispatch, useSelector} from "react-redux";
import RegisterForm from "../../components/registerForm/registerForm";
import {openAuthForm, closeAuthForm, openRegisterForm, closeRegisterForm} from "../../redux/actions";
import AuthForm from "../../components/authForm/authForm";

let startView = () => {
    const dispatch = useDispatch();
    const onRegisterButtonClick = () => dispatch(openRegisterForm());

    const onAuthButtonClick = () => dispatch(openAuthForm());

    return (
       <React.Fragment>
           <img src={medicalPrescription} alt={'medical prescription'}/>
           <Button className={'button button__white button__white--lavender'} onButtonClick={onAuthButtonClick}>
               Log in
           </Button>
           <Button className={'button button__white button__white--green'} onButtonClick={onRegisterButtonClick}>
               Sign up
           </Button>
       </React.Fragment>
    )
}
let StartScreen = () => {
    const isRegisterFormOpen = useSelector(state => state.isRegisterFormOpen.isOpen);
    const isAuthFormOpen = useSelector(state => state.isAuthFormOpen.isOpen);
    return (
        <div className={'start'}>
            <div className={'start__col-1'}>
            </div>
            <div className={'start__col-2'}>
                {!isAuthFormOpen && !isRegisterFormOpen ? startView() : null}
                {!isAuthFormOpen && isRegisterFormOpen ? <RegisterForm/> : null}
                {isAuthFormOpen && !isRegisterFormOpen ? <AuthForm/> : null}
            </div>
        </div>
    )
}

export default StartScreen;