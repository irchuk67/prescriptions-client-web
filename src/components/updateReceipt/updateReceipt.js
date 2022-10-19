import Form from "../form/form";
import {connect} from "react-redux";
import {editReceipt, closeUpdateForm} from "../../redux/actions";

const UpdateReceipt = (props) => {
    const onFormSubmit = (formValues) => {
        props.updateReceipt(props.id, formValues.receiptText);
        props.closeUpdateForm();
    }
    return(
        <Form title={'Update receipt'}
              label={'Updated receipt'}
              buttonText={'Update'}
              isOpen={props.isUpdateOpen}
              onFormClose={props.closeUpdateForm}
              onSubmitPress={onFormSubmit}
              id={props.id}
              initialValues={{receiptText: props.text}}
        />
    )
}

const mapStateToProps = state => {
    return{
        isUpdateOpen: state.isUpdateFormOpen.isOpen,
        text: state.isUpdateFormOpen.text,
        id: state.isUpdateFormOpen.id
    }
}
export default connect(mapStateToProps, {updateReceipt: editReceipt, closeUpdateForm})(UpdateReceipt);