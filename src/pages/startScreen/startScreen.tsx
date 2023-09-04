import React from "react";
import medicalPrescription from "../../assets/medical-prescription-svgrepo-com 1.png";
import Button from "../../components/button/button";
import './startScreen.scss';
import RegisterForm from "../../components/registerForm/registerForm";
import AuthForm from "../../components/authForm/authForm";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {open as openRegisterForm} from "../../redux/slices/registerFormSlice";
import {open as openAuthForm} from "../../redux/slices/authFormSlice";

let startView = () => {
    const dispatch = useAppDispatch();
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
const StartScreen = () => {
    const isRegisterFormOpen = useAppSelector(state => state.registerForm.isOpen);
    const isAuthFormOpen = useAppSelector(state => state.authForm.isOpen);
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