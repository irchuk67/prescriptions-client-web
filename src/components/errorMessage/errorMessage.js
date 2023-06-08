import {Dialog} from "@mui/material";
import React from "react";
import './errorMessage.scss'
import Button from "../button/button";

const ErrorMessage = ({isOpen, onFormClose, title, onButtonClick, onClose, buttonText}) => {
    const errorTitle = title==="" ? "Something went wrong! Try again" : title;
    return(
        <Dialog open={isOpen || false} onClose={onFormClose} className={'error-dialog'}>
            <div className={'error-dialog__wrapper'}>
                <button onClick={() => onClose()} className={'error-dialog__close'}>
                    <span>&times;</span>
                </button>
                <h3 className={'error-dialog__heading'}>{errorTitle}</h3>
                <Button onButtonClick={onButtonClick} className={'button button__white button__white--green'}>{buttonText}</Button>
            </div>
        </Dialog>
    )
}

export default ErrorMessage;