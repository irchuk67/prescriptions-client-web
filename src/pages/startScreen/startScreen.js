import React from "react";
import medicalPrescription from '../../assets/medical-prescription-svgrepo-com 1.svg';
import Button from "../../components/button/button";
import './startScreen.scss';
import {connect} from "react-redux";
import RegisterForm from "../../components/registerForm/registerForm";
import {openAuthForm, closeAuthForm, openRegisterForm, closeRegisterForm} from "../../redux/actions";
import AuthForm from "../../components/authForm/authForm";
import {Navigate} from "react-router-dom";

let startView = ({openAuthForm, closeAuthForm, openRegisterForm, closeRegisterForm}) => {

    const onRegisterButtonClick = () => {
        openRegisterForm();
    }

    const onAuthButtonClick = () => {
        openAuthForm();
    }

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
let StartScreen = (props) => {
    return (
        <div className={'start'}>
            <div className={'start__col-1'}>
            </div>
            <div className={'start__col-2'}>
                {!props.isAuthFormOpen && !props.isRegisterFormOpen ? startView(props) : null}
                {!props.isAuthFormOpen && props.isRegisterFormOpen ? <RegisterForm/> : null}
                {props.isAuthFormOpen && !props.isRegisterFormOpen ? <AuthForm/> : null}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isRegisterFormOpen: state.isRegisterFormOpen.isOpen,
        isAuthFormOpen: state.isAuthFormOpen.isOpen,
        token: state.token,
    }
}

export default connect(mapStateToProps, {openAuthForm, closeAuthForm, openRegisterForm, closeRegisterForm})(StartScreen);