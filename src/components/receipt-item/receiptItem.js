import React from "react";
import './receiptItem.scss';

const ReceiptItem = ({text}) => {
    return(
        <div className={'receipt-item'}>
            {text}
        </div>
    )
}

export default ReceiptItem;