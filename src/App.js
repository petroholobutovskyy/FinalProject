import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./componemts/home/Home";
import AboutUs from "./componemts/home/AboutUs";
import Excursions from "./componemts/excursions/Excursions";
import Lwow from "./componemts/excursions/Lwow";
import Castle from "./componemts/excursions/Castle";
import Ship from "./componemts/excursions/Ship";
import Carpatians from "./componemts/excursions/Carpatians";
import Contact from "./componemts/home/Contact";
import FormSubmission from "./componemts/home/FormSubmission";
import Signup from "./componemts/home/Signup";




function App() {
    // const API = "http://localhost:3000";
    //
    // fetch(`${API}/excursions`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/About-us" component={AboutUs} />
                    <Route exact path="/FormSubmission" component={FormSubmission} />
                    <Route exact path="/Excursions/Lwow" component={Lwow} />
                    <Route exact path="/Excursions/Castle" component={Castle} />
                    <Route exact path="/Excursions/Ship" component={Ship} />
                    <Route exact path="/Excursions/Carpatians" component={Carpatians} />
                    <Route exact  path="/Contact" component={Contact} />
                    <Route exact path="/Excursions" component={Excursions} />


                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
