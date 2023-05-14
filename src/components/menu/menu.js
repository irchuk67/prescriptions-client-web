import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {closeMenu, openMenu} from "../../redux/actions";
import './menu.scss';

const Menu = ({isMenuOpen, openMenu, closeMenu}) => {

    const onMenuClick = () => {
        {isMenuOpen
            ?
            closeMenu()
            :
            openMenu()
        }
    }

    const className = isMenuOpen ? 'burger-menu' : 'hiden';

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
                        <li className="burger-menu__item">
                            <NavLink to={'/patient/main/history'} className="burger-menu__link" onClick={closeMenu}>History of prescriptions</NavLink>
                        </li>
                        <li className="burger-menu__item">
                            <NavLink to={'/patient/main/doctors'} className="burger-menu__link" onClick={closeMenu}>Add new doctor</NavLink>
                        </li>
                        <li className="burger-menu__item">
                            <NavLink to={'/patient/main/medicines'} className="burger-menu__link" onClick={closeMenu}>List of medicines</NavLink>
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