import DialogForm from "../dialog-form/dialog-form";
import {connect} from "react-redux";
import React from "react";
import {FieldArray, Fields, formValueSelector} from "redux-form";
import './prescriptionForm.scss';
import {renderBasicFields, renderMedicines, renderNeedToRepeat, renderRepeatPeriod} from "./fieldsToRender";

const PrescriptionForm = (props) => {
    const fieldNames = [
        ['title', 'description', 'startDate', 'endDate'],
        ['needToRepeat'],
        ['periodOfRepeat'],
        ['medicines']]

    console.log(props.initialValues)
    return (
        <DialogForm title={props.title}
                    buttonText={props.buttonText}
                    isOpen={props.isOpen}
                    onFormClose={props.onClose}
                    onFormSubmit={props.onSubmitPrescription}
                    initialValues={props.initialValues}
        >
            <Fields component={renderBasicFields} names={fieldNames[0]}/>
            <Fields component={renderNeedToRepeat} names={fieldNames[1]}/>
            {props.needToRepeat && <Fields component={renderRepeatPeriod} names={fieldNames[2]}/>}
            <FieldArray name={fieldNames[3][0]} component={renderMedicines}/>
        </DialogForm>
    )
}

const selector = formValueSelector('receiptForm');

export default connect((state, ownProps) => {
    const needToRepeat = selector(state, 'needToRepeat');
    console.log(ownProps)
    const initialData = () => {
        if (ownProps.initialValues) {
            return {
                ...ownProps.initialValues
            }
        }
        else{
            return {}
        }
    }
    return {
        needToRepeat,
        initialValues: initialData()
    }
})
(PrescriptionForm);