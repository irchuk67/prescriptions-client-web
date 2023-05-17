import React from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Button from '../button/button.js'
import './dialog-form.scss';
import {reduxForm} from "redux-form";
import validate from '../prescriptionForm/validation'

const DialogForm = (props) => {
    return (
        <Dialog open={props.isOpen} onClose={props.onFormClose} id={'dialog'}>
            <div className={'new-form__wrapper'}>
                <h3 className={'new-form__heading'}>{props.title}</h3>
                <form className={'new-form'} onSubmit={props.handleSubmit(props.onFormSubmit)}>
                    {props.children}
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
    enableReinitialize: true,
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true,
    validate
})(DialogForm);