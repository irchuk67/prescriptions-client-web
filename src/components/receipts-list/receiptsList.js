import React, {useEffect, useState} from "react";
import {getReceipts} from "../../api";
import ReceiptItem from "../receipt-item/receiptItem";
import './receiptsList.scss';

const ReceiptsList = () => {
    const [receipts, setReceipts] = useState([]);

    useEffect(() => {
            getReceipts().then(res => setReceipts(res.data));
        }, []
    )

    const receiptList = receipts.map(receipt => <ReceiptItem key={receipt.id} text={receipt.text}/>);

    return(
        <div className={'receipts-list'}>
            <h1 className={'receipts-list__heading'}>Receipts list</h1>
            {receiptList}
        </div>
    )
}

export default ReceiptsList;