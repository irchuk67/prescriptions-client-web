import React, {useEffect, useRef, useState} from "react";
import ReceiptsList from "./components/receipts-list/receiptsList";
import './base.scss';
import Button from "./components/button/button";
import Form from "./components/form/form";
import {connect} from "react-redux";
import {getAllReceipts, openAddForm} from "./redux/actions";
import AddReceipt from "./components/addReceipt/addReceipt";
import UpdateReceipt from "./components/updateReceipt/updateReceipt";

const App = (props) => {
    const [isListOpened, setIsListOpened] = useState(false);

    const onOpenListClick = () => {
        setIsListOpened(!isListOpened)
        props.getAllReceipts();
    }

    return (
        <div className={'container'}>
            <div className={'buttons'}>
                <Button onButtonClick={() => onOpenListClick()} className={'button button__green'}>
                    {isListOpened ?
                        <div>
                            <p>
                                hide receipts
                            </p>
                        </div>
                        :
                        <div>
                            <p>
                                Show all receipts
                            </p>
                        </div>
                    }
                </Button>
                <Button onButtonClick={() => props.openAddForm()} className={'button button__pink'}>
                    Add receipt
                </Button>
            </div>
            {isListOpened ? <ReceiptsList/> : null}
            {props.isAddFormOpened ? <AddReceipt/> : null}
            <UpdateReceipt/>
        </div>)
}

const mapStateToProps = state => {
    return{
        receipts : state.receipts,
        isAddFormOpened: state.isAddFormOpen,
        isUpdateFormOpened: state.isUpdateFormOpen
    }
}

export default connect(mapStateToProps, {getAllReceipts, openAddForm})(App)