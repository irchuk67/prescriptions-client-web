import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Button from '../button/button.js'
import './dialog-form.scss';
import {Field, reduxForm} from "redux-form";

const renderInput = ({input, label}) => {
    return(
        <div className={'new-form__field'}
        >
            <label htmlFor="receiptText" className={'new-form__label'}>{label}</label>
            <input {...input} id={'receiptText'} className={'new-form__input'}/>
        </div>
    )
}

const DialogForm = (props) => {
    function onFormSubmit (formValues) {
        props.onSubmitPress(formValues);
    }

    return (
        <Dialog open={props.isOpen || false} onClose={props.onFormClose} className={'dialog'}>
            <div className={'new-form__wrapper'}>
                <h3 className={'new-form__heading'}>{props.title}</h3>
                <form className={'new-form'} onSubmit={props.handleSubmit(onFormSubmit)}>

                    <Field name={'receiptText'}
                           component={renderInput}
                           label={props.label}
                    />
                    <div className={'new-form__buttons'}>
                        <Button className={'button button__green new-form__button'}>{props.buttonText}</Button>
                        <Button className={'button button__lavender new-form__button'}
                                onButtonClick={(event) => {
                                    event.preventDefault();
                                    props.onFormClose()
                                }}>Cancel</Button>
                    </div>
                </form>

            </div>
        </Dialog>
    )
}

export default reduxForm({
    form: 'receiptForm',
    enableReinitialize: true
})(DialogForm);