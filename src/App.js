import React, {useEffect, useState} from "react";
import axios from "axios";
import {getReceipts} from "./api";


const App = () => {
    const [receipts, setReceipts] = useState([]);

    useEffect(() => {
            getReceipts().then(res => setReceipts(res.data));
        }, []
    )

    const receiptList = receipts.map(receipt => <div key={receipt.id}>{receipt.text}</div>)
    return (
        <div>
            {receiptList}
        </div>)
}

export default App