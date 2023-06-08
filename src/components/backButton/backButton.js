import {NavLink} from "react-router-dom";
import './backButton.scss';

const BackButton = (props) => {
    return (
        <NavLink className={'back-button'} to={props.backPath}>
            <span>&larr;</span>Back
        </NavLink>
    )
}

export default BackButton;