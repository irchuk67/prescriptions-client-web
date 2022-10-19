import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Button from '../button/button.js'
import {createReceipt} from "../../api";
import './form.scss';
import {connect} from "react-redux";
import {addNewReceipt} from "../../redux/actions";
import {Field, reduxForm} from "redux-form";

const Form = (props) => {
    function onFormSubmit (formValues) {
        props.onSubmitPress(formValues);
    }
    const renderInput = ({input, label}) => {
        return(
            <div className={'new-receipt-form__form'}
            >
                <label htmlFor="receiptText" className={'new-receipt-form__label'}>{label}</label>
                <input {...input} id={'receiptText'} className={'new-receipt-form__input'}/>
            </div>
        )
    }
    return (
        <Dialog open={props.isOpen || false} onClose={props.onFormClose} className={'dialog'}>
            <div className={'new-receipt-form__wrapper'}>
                <h3 className={'new-receipt-form__heading'}>{props.title}</h3>
                <form className={'new-receipt-form'} onSubmit={props.handleSubmit(onFormSubmit)}>

                    <Field name={'receiptText'}
                           component={renderInput}
                           label={props.label}
                    />
                    <div className={'new-receipt-form__buttons'}>
                        <Button className={'button button__green new-receipt-form__button'}>{props.buttonText}</Button>
                        <Button className={'button button__lavender new-receipt-form__button'}
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
})(Form);