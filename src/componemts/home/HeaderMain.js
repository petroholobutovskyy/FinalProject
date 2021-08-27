import React, {Component} from 'react';
import {Link} from "react-router-dom";

class HeaderMain extends Component {
    render() {
        return (
            <div className="container1">
                <nav className="header__navigation">
                    <ul className="navigation-list">
                        <li className="navigation-list-item"><Link to="/"> Strona Glowna</Link></li>
                        <li className="navigation-list-item"><Link to="/About-us">O nas</Link></li>
                        <li className="navigation-list-item"><Link to="/Excursions">Wycieczki</Link></li>
                        <li className="navigation-list-item"><Link to="/Opinions">Opinie</Link></li>
                        <li className="navigation-list-item"><Link to="/Contact">Kontakt</Link></li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default HeaderMain;