import React, {useState} from 'react';
import {Fields, formValueSelector, reduxForm} from "redux-form";
import Button from "../button/button";
import '../dialog-form/dialog-form.scss';
import './registerForm.scss';
import {connect} from "react-redux";
import {closeRegisterForm, openAuthForm} from "../../redux/actions";
import {createNewUser} from "../../api";
import validate from "./validate";
import {
    renderClinicFields, renderDoctorSpecialisation,
    renderIdentificationFields,
    renderPatientParamsFields,
    renderPersonalFields,
    renderRoleFields
} from "./fieldsToRender";
import ErrorMessage from "../errorMessage/errorMessage";



let registerForm = (props) => {
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const formFieldNames = [
        ['name',
            'surname',
            'middleName',
            'dateOfBirth',
            'sex'],
        ['role'],
        ['weight',
            'height'],
        ['specialisation'],
        ['clinic',
            'clinicAddress'],
        ['phoneNumber',
            'email',
            'password',
            'repeatPassword']];

    async function onFormSubmit(formValues) {
        try{
            const userToCreate = {
                name: formValues.name,
                surname: formValues.surname,
                middleName: formValues.middleName,
                birthDate: formValues.dateOfBirth,
                sex: formValues.sex,
                phoneNumber: formValues.phoneNumber,
                email: formValues.email,
                password: formValues.password,
                role: formValues.role,
                weight: formValues.weight,
                height: formValues.height,
                clinic: formValues.clinic,
                clinicAddress: formValues.clinicAddress,
                specialisation: formValues.specialisation

            }
            await createNewUser(userToCreate);
            props.closeRegisterForm();
            props.openAuthForm();
        }catch (err){
            setIsError(true);
            setErrorMessage(err.response.data)
        }
    }

    const onErrorClose = () => {
        setIsError(false);
    }

    const onErrorButtonClick = () => {
        props.closeRegisterForm();
        props.openAuthForm();
    }
    return (
        <div className={'register'}>
            <form onSubmit={props.handleSubmit(onFormSubmit)}>
                <Fields names={formFieldNames[0]} component={renderPersonalFields}/>
                <Fields names={formFieldNames[1]} component={renderRoleFields}/>
                {props.role === 'patient' && <Fields names={formFieldNames[2]} component={renderPatientParamsFields}/>}
                {props.role === 'doctor' && <Fields names={formFieldNames[3]} component={renderDoctorSpecialisation}/>}
                <Fields names={formFieldNames[4]} component={renderClinicFields}/>
                <Fields names={formFieldNames[5]} component={renderIdentificationFields}/>
                <div className={'new-form__buttons register__buttons'}>
                    <Button className={'button button__white button__white--green register__button'}>Sign up</Button>
                    <Button className={'button button__white button__white--gray register__button'}
                            onButtonClick={(event) => {
                                event.preventDefault();
                                props.closeRegisterForm()
                            }}>Cancel</Button>
                </div>
            </form>
            {isError &&
                <ErrorMessage isOpen={isError}
                              onFormClose={onErrorClose}
                              title={errorMessage}
                              onClose={onErrorClose}
                              onButtonClick={onErrorButtonClick}
                />}
        </div>
    )
}

registerForm = reduxForm({
    form: 'registerForm',
    validate,
    destroyOnUnmount: false
})(registerForm)

const selector = formValueSelector('registerForm');
registerForm = connect(state => {
    const role = selector(state, 'role');
    return {role}
}, {closeRegisterForm, openAuthForm})(registerForm)

export default registerForm;