import Form from "../form/form";
import {connect} from "react-redux";
import {addNewReceipt, closeAddForm} from "../../redux/actions";

const AddReceipt = (props) => {
    const onFormSubmit = (formValues) => {
        props.addNewReceipt(formValues.receiptText);
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
export default connect(mapStateToProps, {addNewReceipt, closeAddForm})(AddReceipt);