import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";
import {closeMenu, openMenu} from "../../redux/actions";
import './menu.scss';

const Menu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.isMenuOpen.isOpen);
    const onMenuClick = () => {
        {isMenuOpen
            ?
            dispatch(closeMenu())
            :
            dispatch(openMenu())
        }
    }

    const className = isMenuOpen ? 'burger-menu' : 'hiden';

    const onHistoryOfPrescriptionsOpen = () => {
        navigate('/patient/main/history');
        dispatch(closeMenu());
    }

    const onDoctorsOpen = () => {
        navigate('/patient/main/doctors');
        dispatch(closeMenu());
    }
    return (
        <div className={className}>
            <div className={`burger-menu__button burger-menu__button${isMenuOpen ? '--checked' : ''}`}
                 onClick={onMenuClick}>
                <span className="burger-menu__button__icon burger-menu__button__icon--1">&nbsp;</span>
                <span className="burger-menu__button__icon burger-menu__button__icon--2">&nbsp;</span>
                <span className="burger-menu__button__icon burger-menu__button__icon--3">&nbsp;</span>
            </div>
            <div className="burger-menu__background">&nbsp;</div>
            {isMenuOpen &&
                <nav className="burger-menu__nav">
                    <h3>Menu</h3>
                    <ul className="burger-menu__list">
                        <li className="burger-menu__item" onClick={onHistoryOfPrescriptionsOpen}>
                            History of prescriptions
                        </li>
                        <li className="burger-menu__item" onClick={onDoctorsOpen}>
                            Add new doctor
                        </li>
                    </ul>
                </nav>}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isMenuOpen: state.isMenuOpen.isOpen
    }
}
export default connect(mapStateToProps, {openMenu, closeMenu})(Menu);