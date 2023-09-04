import {Fields, reduxForm} from "redux-form";
import Button from "../button/button";
import ErrorMessage from "../errorMessage/errorMessage";
import {useState} from "react";
import userIcon from '../../assets/account.svg';
import lock from '../../assets/lock-svgrepo-com 1.svg';
import './authForm.scss';
import {connect, useDispatch, useSelector} from "react-redux";
import {closeAuthForm, getCurrentUserData, logIn, openRegisterForm} from "../../redux/actions";
import {  useNavigate } from "react-router-dom";

const renderFields = (fields) => {
    const {email, password} = fields;

    return (
        <div>
            <div className={'auth__field'}>
                <label htmlFor="email">
                    <img src={userIcon}/>
                    Email
                </label>
                <input {...email.input} id={'email'} type={"email"} className={'register__input'}/>
                {email.meta.touched &&
                    ((email.meta.error && <span className={'register__error'}>{email.meta.error}</span>))}
            </div>

            <div className={'auth__field'}>
                <label htmlFor="password">
                    <img src={lock}/>
                    Password
                </label>
                <input {...password.input} id={'password'} type={"password"} className={'register__input'}/>
                {password.meta.touched &&
                    ((password.meta.error && <span className={'register__error'}>{password.meta.error}</span>))}
            </div>
        </div>
    )
}

const AuthForm = (props) => {
    const formFieldNames = ['email', 'password'];
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onErrorClose = () => {
       setIsError(false)
    }

    const onNoAccountClick = () => {
        dispatch(closeAuthForm());
        dispatch(openRegisterForm());
    }

    const onSubmit = async (formValues) => {
        try {
            const userToAuth = {
                email: formValues.email,
                password: formValues.password
            }

            await dispatch(logIn(userToAuth));
            await dispatch(getCurrentUserData(localStorage.getItem('token')));
            const role = JSON.parse(localStorage.getItem('currentUser')).role;
            if(localStorage.getItem('token') && localStorage.getItem('token') !== ''){
                if(role === 'patient')
                    navigate('/patient/main')
                else if(role === 'doctor')
                    navigate('/doctor/main')
            }
        }catch (err){
            setIsError(true);
            setErrorMessage(err.response.data)
        }
    }

    return (
        <div className={'auth'}>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <Fields names={formFieldNames} component={renderFields}/>
                <div className={'auth__buttons'}>
                    <p onClick={onNoAccountClick} className={'auth__text-button'}>Don`t have account yet?</p>
                    <Button className={'button button__white button__white--lavender'}>
                        Log In
                    </Button>
                </div>
            </form>
            {isError &&
                <ErrorMessage isOpen={isError}
                              onFormClose={onErrorClose}
                              title={errorMessage ? errorMessage : "something wrong"}
                              onClose={onErrorClose}
                              buttonText={'Close'}
                              onButtonClick={onErrorClose}
                />}
        </div>
    )

}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.email ){
        errors.email = 'Required'
    }else if (!/^[A-z\d*]+@[A-z.]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'Invalid email address'
    }

    if(!formValues.password ){
        errors.password = 'Required'
    }

    return errors;
}

export default reduxForm({
    form: 'authForm',
    validate
})(AuthForm);