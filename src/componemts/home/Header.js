import React, {Component} from 'react';
// import Signup from "./Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

// ikonki maja byc klikane
class Header extends Component {
    render() {
        return (
            
                <header style={{backgroundColor: "#3723e4",
                borderBottom: "1px solid skyblue"}}>
                    <div className="container1">
                        <div className="header__container">
                            <a href="/" className="header-logo">Wander<span>Lust</span></a>
                            <div className="header__user-container">
                            <a href="/login"className="header__login-link">
                                <FontAwesomeIcon icon={faUser} className="icon icon-user" />
                                Zaloguj się</a>
                                <FontAwesomeIcon icon={faShoppingCart} className="icon icon-shopping-cart"/>
                    </div>
                    </div>
                    </div>
                </header>
            
        );
    }
}

export default Header;