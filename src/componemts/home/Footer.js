import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import styled from "styled-components";

class Footer extends Component {
    render() {
        return (
            <FooterContainer className="footer__container" style={{backgroundColor: "silver"}}>
            
                 <footer className="footer-middle toHide">
                    <div className="container1">
                        <div className="row columns__footer">
                            {/*Colomn1*/}
                            <section className="col-md-3 col-sm-6">
                                <h4 style={{fontSize: "14px", fontWeight: "600"}}>Adres</h4>
                                <ul className="list-unstyled">
                                    <li>00-111 ul. Warszawska 135</li>
                                    <li>Lwow, Ukraina</li>

                                </ul>
                            </section>
                            {/*Colomn 2*/}
                            <section className="col-md-3 col-sm-6">
                                <h4 style={{fontSize: "14px", fontWeight: "600"}}>Wycieczki</h4>
                                <ul className="list-unstyled">
                                    <li> <a href="/excursions/carpatins">Wyprawa w góry</a> </li>
                                    <li> <a href="/excursions/lwow">Poznaj niesamowity Lwów!</a> </li>
                                    <li> <a href="/excursions/castle">Sredniowieczne zamki Galicji</a> </li>
                                    <li> <a href="/excursions/huculy">Kultura Hucułów</a> </li>
                                </ul>
                            </section>
                            {/*Colomn3*/}
                            <section className="col-md-3 col-sm-6" style={{textAlign: "justify"}}>
                                <h4 style={{fontSize: "14px", fontWeight: "600"}}>Inne</h4>
                                <ul className="list-unstyled">
                                    <li> <a href="/about-us">O nas</a> </li>
                                    <li> <a href="/opinions">Opinie</a> </li>
                                    <li> <a href="/galery">Geleria zdjec</a> </li>

                                </ul>
                            </section>
                        </div>
                    </div>
                 </footer>

                 {/*Footer Bottom*/}
                 <footer className="footer-bottom">
                    <p className="text-xs-center" style={{marginBottom: "0", paddingBottom: "10px"}}>
                        &copy;{new Date().getFullYear()} WanderlustTravel - All rights reserwed
                    </p>
                 </footer>
            
            </FooterContainer>
        );
    }
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle, .footer-bottom{
  background: silver;
  padding-top: 10px;
}
  
  .footer-bottom {
    text-align: center;
    border-top: 1px solid darkslategray;
  }
  
  
  ul li a {
    color: black;
    text-decoration: none;
    
    &:hover {
      color: #5555;
    }
  }
  
  
  
  
`
// <div className="footer__container">
//     <a href="/" className="header-logo">Wander<span>Lust</span></a>
//     <span className="footer-copyright">Copyright &#64;Wanderlust2021</span>
//     <div className="social-media-icons">
//         <FontAwesomeIcon icon={faFacebook} className="icon-user" />
//         <FontAwesomeIcon icon={faTwitter} className="icon-user" />
//     </div>
// </div>