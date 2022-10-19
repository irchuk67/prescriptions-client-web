import React from "react";
import {Delete, Edit} from "@mui/icons-material";
import './receiptItem.scss';
import {connect} from "react-redux";
import {openUpdateForm} from "../../redux/actions";

const ReceiptItem = ({text, onItemDelete, id, openUpdateForm}) => {
    return(
        <div className={'receipt-item'}>
            {text}
            <div className={'receipt-item__icons'}>
                <Edit onClick={() => openUpdateForm(id, text)}/>
                <Delete color={"error"} onClick={() => onItemDelete(id)}/>
            </div>
        </div>
    )
}

export default connect(null, {openUpdateForm})(ReceiptItem);