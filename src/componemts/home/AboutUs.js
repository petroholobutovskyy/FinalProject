import React, {Component} from 'react';
import Header from "./Header";
import HeaderMain from "./HeaderMain";
import Footer from "./Footer";

class AboutUs extends Component {
    render() {
        return (
            <div className="container1">
                <Header/>
                <HeaderMain/>
                <h3>Kim jestesmy?</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum. </p>
                <Footer/>

            </div>
        );
    }
}

export default AboutUs;