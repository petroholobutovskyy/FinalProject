import React, {Component} from 'react';
import Header from "../home/Header";
import HeaderNav from "../home/HeaderNav";
import Footer from "../home/Footer";
import huculy1 from '../../images/huculy1.jpg'
import huculy2 from '../../images/huculy2.jpg'
import huculy3 from '../../images/huculy3.jpg'

class Ship extends Component {
    render() {
        return (
            <div className="container1">
                <Header/>
                <HeaderNav/>
                <h2 className="excursion__detailed-main-header">Informacja o wycieczce:</h2>
                <h3 className="excursion__detailed-second-header">Kultura Hucułów</h3>
                <div className="excursion__detailed-info-container">
                    <div className="excursion__detailed-info">
                        <div className="excursion__detailed-main-info">
                            <h4 className="excursion__detailed-inner-header">main info</h4>
                            <p className="excursion__detailed-price">Cena: $50</p>
                        </div>
                        <p className="excursion__detailed-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="excursion__detailed-order">
                            <a href="/form-submission" className="single-btn excursion__detailed-btn">Rezerwuj</a>
                        </div>
                    </div>
                    <div className="excursion__detailed-info-images">
                        <img src={huculy1}/>
                        <img src={huculy2}/>
                        <img src={huculy3}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Ship;