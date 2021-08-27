import React from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import { FormGroup, Row, Col, FormLabel, FormControl, FloatingLabel, Button, InputGroup, FormSelect, FormCheck} from "react-bootstrap";
import * as Yup from "yup";
import * as yup from "yup";
import Header from "./Header";
import HeaderMain from "./HeaderMain";
import Formularz from "./Formularz";
import Footer from "./Footer";


const FormSubmission = () => {
    return (
        <div className="container1">
            <Header/>
            <HeaderMain/>
            <Formularz/>
            <Footer/>
        </div>
    );
};

export default FormSubmission;
