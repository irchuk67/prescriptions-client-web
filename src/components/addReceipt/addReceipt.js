import DialogForm from "../dialog-form/dialog-form";
import {useDispatch, useSelector} from "react-redux";
import {addNewPrescription, closeAddForm} from "../../redux/actions";
import React, {useState} from "react";
import PrescriptionForm from "../prescriptionForm/prescriptionForm";
import ErrorMessage from "../errorMessage/errorMessage";

const AddPrescription = () => {
    const path = window.location.pathname.split('/');
    const assigneeId = path[path.length - 1];
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const isOpen = useSelector(state => state.isAddFormOpen);
    const dispatch = useDispatch();
    const onErrorClose = () => {
        setIsError(false);
    }

    const onErrorButtonClick = () => {
        setIsError(false);
    }

    const onFormSubmit = async (formValues) => {
        try {
            const prescription = {
                title: formValues.title,
                description: formValues.description,
                startDate: formValues.startDate,
                endDate: formValues.endDate,
                needToRepeat: formValues.needToRepeat || false,
                periodOfRepeat: formValues.periodOfRepeat + " " + (formValues.periodMeasure && formValues.periodMeasure),
                assignee: assigneeId,
                isReady: false,
                medicines: formValues.medicines
            }
            await dispatch(addNewPrescription(prescription, localStorage.getItem('token'), assigneeId));
            dispatch(closeAddForm());
        } catch (err) {
            setIsError(true);
            setErrorMessage(err.response.data)
        }

    }
    return (
        <React.Fragment>
            <PrescriptionForm
                title={'Add new prescription'}
                buttonText={'Create'}
                onSubmitPrescription={onFormSubmit}
                isOpen={isOpen}
                onClose={() => dispatch(closeAddForm())}
            />
            {isError &&
                <ErrorMessage isOpen={isError}
                              onFormClose={onErrorClose}
                              title={errorMessage && 'something wrong'}
                              buttonText={'Close'}
                              onClose={onErrorClose}
                              onButtonClick={onErrorButtonClick}
                />}
        </React.Fragment>

    )
}

export default AddPrescription;