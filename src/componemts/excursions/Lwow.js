import React, {Component} from 'react';
import Header from "../home/Header";
import HeaderNav from "../home/HeaderNav";
import Footer from "../home/Footer";
import lwow1 from '../../images/lwow1.jpg'
import lwow2 from '../../images/lwow2.jpg'
import lwow3 from '../../images/lwow3.jpg'

class Lwow extends Component {
    render() {
        return (
            <div className="container1">
                <Header/>
                <HeaderNav/>
                <header style={{backgroundColor: 'white'}}>
                <h1 className="excursion__detailed-main-header">Informacja o wycieczce:</h1>
                <h2 className="excursion__detailed-second-header" style={{
                    marginBottom: "0", 
                    backgroundColor: "rgba(230, 119, 68, 0.849)",
                    color: 'white',
                    paddingLeft: "15px"
                    }}>Poznaj niesamowity Lwów!</h2>
                </header>
                <main>
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
                        <img src={lwow1} alt="photo of the city of Lviv"/>
                        <img src={lwow2} alt="photo of the city of Lviv"/>
                        <img src={lwow3} alt="photo of the city of Lviv"/>
                    </div>
                </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Lwow;