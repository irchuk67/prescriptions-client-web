import React from "react";
import './button.scss';

const Button = (props) => {
    return(
        <button onClick={props.onButtonClick} className={props.className}>
            {props.children}
        </button>
    )
}

export default Button