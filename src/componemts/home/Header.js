import React from 'react';
// import Signup from "./Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


const Header = () => {

    fetch("http://api.openweathermap.org/data/2.5/weather?id=702550&appid=4809b41399d85494de13a4bd92524090") 
    .then(function(resp) {return resp.json() }) 
    .then(function (data) {
        console.log(data);
        document.querySelector('.weather-city').textContent = data.name;
        document.querySelector('.weather-temperature').innerHTML = Math.round(data.main.temp - 273) + "&deg;";
        // https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.weather-pic').innerHTML = 
        `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="weather"/>`
    })
    .catch(function() {

    }) 
    
        return (
            
                <header style={{backgroundColor: "#292929",
                borderBottom: "1px solid rgba(230, 119, 68, 0.849)"}}>
                    <div className="container1">
                        <div className="header__container">
                            <a href="/" className="header-logo">Wander<span>Lust</span></a>
                            <div className="header__user-container">
                            <a href="/login"className="header__login-link" style={{marginRight: "10px" }}>
                                <FontAwesomeIcon icon={faUser} className="icon icon-user" />
                                Zaloguj się</a>
                            <div  className="weather">
                                    <p className="weather-city" style={{marginTop: "3px"}}>Lwów</p>
                                    <p className="weather-temperature">10&deg;</p>
                                    <p className="weather-pic"></p>
                            </div>
                    </div>
                    </div>
                    </div>
                </header>
            
        );
}

export default Header;