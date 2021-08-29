import React, {Component} from 'react';
import Signup from "./Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

// ikonki maja byc klikane
class Header extends Component {
    render() {
        return (
            <div className="container1">
                <header className="header__container">
                    <a href="/" className="header-logo">Wander<span>Lust</span></a>
                    <div className="header__user-container">
                        <FontAwesomeIcon icon={faUser} className="icon-user" />
                        <a href="/Signup">Zaloguj się</a>
                        <FontAwesomeIcon icon={faShoppingCart} className="icon-shopping-cart"/>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;