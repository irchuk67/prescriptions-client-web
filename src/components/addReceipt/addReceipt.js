import Form from "../dialog-form/dialog-form";
import {connect} from "react-redux";
import {addNewPrescription, closeAddForm} from "../../redux/actions";

const AddPrescription = (props) => {
    const onFormSubmit = (formValues) => {
        props.addNewPrescription(formValues.receiptText);
        props.closeAddForm();
    }
    return(
        <Form title={'Add new receipt'}
              label={'New receipt'}
              buttonText={'Create'}
              isOpen={props.isOpen}
              onFormClose={props.closeAddForm}
              onSubmitPress={onFormSubmit}
        />
    )
}

const mapStateToProps = state => {
    return{
        isOpen: state.isAddFormOpen,
        receipts: state.receipts
    }
}
export default connect(mapStateToProps, {addNewPrescription, closeAddForm})(AddPrescription);