import closedEye from "../../assets/eye-closed-svgrepo-com.svg";
import openedEye from "../../assets/eye-open-svgrepo-com.svg";
import React from "react";

const EyeButton = (isOpened) =>{
    return(
        <React.Fragment>
            {isOpened ?
                <img src={openedEye}/>
                :
                <object data={closedEye} width={50} height={50}/>}
        </React.Fragment>
    )
}

export default EyeButton;