import React, {Component} from 'react';
import Header from "../home/Header";
import HeaderNav from "../home/HeaderNav";
import Footer from "../home/Footer";
import castle1 from '../../images/castle1.jpg'
import castle2 from '../../images/castle2.jpg'
import castle3 from '../../images/castle3.jpg'

class Castle extends Component {
    render() {
        return (
            <div className="container1">
                <Header/>
                <HeaderNav/>
                <header style={{backgroundColor: 'white'}}>
                    <h1 className="excursion__detailed-main-header">Informacja o wycieczce:</h1>
                    <h2 style={{
                    marginBottom: "0", 
                    backgroundColor: "rgba(230, 119, 68, 0.849)",
                    color: 'white',
                    paddingLeft: "15px"
                    }} className="excursion__detailed-second-header">Sredniowieczne zamki Galicji</h2>
                </header>
                <main>
                    <section className="excursion__detailed-info-container">
                        <article className="excursion__detailed-info">
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
                        </article>
                        <div className="excursion__detailed-info-images">
                            <img src={castle1} alt="castle"/>
                            <img src={castle2} alt="castle"/>
                            <img src={castle3} alt="castle"/>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Castle;