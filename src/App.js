import React, {useState} from "react";
import ReceiptsList from "./components/receipts-list/receiptsList";
import './base.scss';
import Button from "./components/button/button";

const App = () => {
    const [isListOpened, setIsListOpened] = useState(false);

    const onButtonClick = () => {
        setIsListOpened(!isListOpened)
    }
    return (
        <div className={'container'}>
            <Button onButtonClick={onButtonClick}>
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
            {isListOpened ? <ReceiptsList/> : null}
        </div>)
}

export default App