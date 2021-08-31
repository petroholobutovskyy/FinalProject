import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Container,Row, Col, Button, Header, Nav, Navbar, NavDropdown} from "react-bootstrap";
class HeaderMain extends Component {
    render() {
        return (
             <nav style={{backgroundColor: "#3723e4"}}>
                 <div className="container1">
                     <div className="header__navigation">
                     <ul className="navigation-list">
                        <li className="navigation-list-item"><Link to="/"> Strona Glowna</Link></li>
                        <li className="navigation-list-item"><Link to="/About-us">O nas</Link></li>
                        <li className="navigation-list-item"><Link to="/Excursions">Wycieczki</Link></li>
                        <li className="navigation-list-item"><Link to="/Opinions">Opinie</Link></li>
                        <li className="navigation-list-item"><Link to="/Contact">Kontakt</Link></li>
                </ul>
                     </div>
                    
                </div>
              </nav>
       
            
                    
                    
                    
                    
                    
                    // <NavDropdown title="Wycieczki" id="basic-nav-dropdown">
                    //   <NavDropdown.Item href="#action/3.1">Wyprawa w góry</NavDropdown.Item>
                    //   <NavDropdown.Item href="#action/3.2">Sredniowieczne zamki Galicji</NavDropdown.Item>
                    //   <NavDropdown.Item href="#action/3.3">Spływ statkiem rzeką Dnister</NavDropdown.Item>
                    //   <NavDropdown.Item href="#action/3.3">Poznaj niesamowity Lwów!</NavDropdown.Item>
                    // </NavDropdown>
                    

            
        );
    }
}

export default HeaderMain;