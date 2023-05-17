import Form from "../dialog-form/dialog-form";
import {connect} from "react-redux";
import {editPrescription, closeUpdateForm} from "../../redux/actions";
import PrescriptionForm from "../prescriptionForm/prescriptionForm";
import {formatDate} from "../../format";

const UpdatePrescription = (props) => {
    const path = window.location.pathname.split('/');
    const assigneeId = path[path.length - 1];
    const {title, description, startDate, endDate, needToRepeat, periodOfRepeat, medicines} = props.prescriptionData;
    let repeatPeriod, periodMeasure;
    if(periodOfRepeat && (typeof periodOfRepeat === 'string')){
        const periodSplitted = periodOfRepeat.split(" ");
        console.log(periodSplitted)
        repeatPeriod= periodSplitted[0];
        periodMeasure = periodSplitted[periodSplitted.length - 1]
    }
    const initialPrescription = {
        title: title,
        description: description,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        needToRepeat: needToRepeat,
        periodOfRepeat: repeatPeriod || '',
        periodMeasure: periodMeasure || '',
        medicines: medicines || []
    }

    const onFormSubmit = async (formValues) => {
        const prescription = {
            title: formValues.title,
            description: formValues.description,
            startDate: new Date(formValues.startDate),
            endDate: formValues.endDate,
            needToRepeat: formValues.needToRepeat,
            periodOfRepeat: formValues.periodOfRepeat + ' ' + formValues.periodMeasure,
            assignee: props.prescriptionData.assignee,
            isReady: false,
            medicines: formValues.medicines
        }
        await props.updatePrescription(props.id, prescription, localStorage.getItem('token'), assigneeId);
        props.closeUpdateForm();
    }



    return (
        <PrescriptionForm
            title={'Update prescription'}
            buttonText={'Update'}
            isOpen={props.isUpdateOpen}
            onClose={props.closeUpdateForm}
            onSubmitPrescription={onFormSubmit}
            initialValues={initialPrescription}
        />
    )
}

const mapStateToProps = state => {
    return {
        isUpdateOpen: state.isUpdateFormOpen.isOpen,
        prescriptionData: state.isUpdateFormOpen.prescription,
        id: state.isUpdateFormOpen.id
    }
}
export default connect(mapStateToProps, {updatePrescription: editPrescription, closeUpdateForm})(UpdatePrescription);