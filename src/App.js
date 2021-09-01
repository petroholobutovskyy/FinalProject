import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./componemts/home/Home";
import AboutUs from "./componemts/home/AboutUs";
import Excursions from "./componemts/excursions/Excursions";
import Lwow from "./componemts/excursions/Lwow";
import Castle from "./componemts/excursions/Castle";
import Huculy from "./componemts/excursions/Huculy";
import Carpatians from "./componemts/excursions/Carpatians";
import Contact from "./componemts/home/Contact";
import FormSubmission from "./componemts/home/FormSubmission";
import Signup from "./componemts/authentication/Signup";
import Login from "./componemts/authentication/Login";
import Logout from "./componemts/authentication/Logout";
import ForgotPassword from "./componemts/authentication/ForgotPassword";
import PrivateRoute from "./componemts/authentication/PrivateRoute";
import UpdateProfile from "./componemts/authentication/UpdateProfile";
function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/logout" component={Logout} />
                    <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/form-submission" component={FormSubmission} />
                    <Route exact path="/excursions/lwow" component={Lwow} />
                    <Route exact path="/excursions/castle" component={Castle} />
                    <Route exact path="/excursions/huculy" component={Huculy} />
                    <Route exact path="/excursions/carpatians" component={Carpatians} />
                    <Route exact  path="/contact" component={Contact} />
                    <Route exact path="/excursions" component={Excursions} />


                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;