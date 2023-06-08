import {NavLink} from "react-router-dom";
import Button from "../button/button";
import React from "react";
import './ListOfMedicines.scss';

const ListOfMedicines = () => {
    return(
        <div className={'medicines-list'}>
            <div className={'medicines-list__header'}>
                <h3 className={'medicines-list__title'}>List of medicines for a week</h3>
                <NavLink to={'/patient/main'}>
                    <Button className={'button button__green medicines-list__button'}>Go to daily receipts</Button></NavLink>
            </div>
        </div>

    )
}

export default ListOfMedicines
