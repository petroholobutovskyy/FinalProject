import React from 'react';
import styled from 'styled-components';
import { FormGroup,Form, Row, Col, FormLabel, FormControl, FloatingLabel, Button, InputGroup, FormSelect, FormCheck} from "react-bootstrap";
import {Formik} from "formik";
import * as Yup from "yup";
// Styled-components styles



const Formularz = () => {
    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "*Imię musi posiadać min 2 znaki")
            .max(20, "*Imię nie może przekraczać 20 znaków")
            .required("*Imię jest wymagane"),
        lastName: Yup.string()
            .min(2, "*Nazwisko musi posiadać min 2 znaki")
            .max(20, "*Nazwisko nie może przekraczać 20 znaków")
            .required("*Nazwisko jest wymagane"),
        email: Yup.string()
            .email("*Email musi być ważny")
            .max(70, "*Email nie może posiadać więcej niż 70 znaków")
            .required("*Email jest wymagany"),
        phone: Yup.string()
            .matches(phoneRegExp, "*Numer nie jest ważny")
            .required("*Numer telefonu jest wymagany"),
        terms: Yup.boolean().required('Warunki musza być zaakceptowane').oneOf([true], 'Warunki musza być zaakceptowane'),
    });
    return (
        <div className="container__formularz">
            <div className="container1">
            <h1 style={{
                textTransform: "uppercase",
                textAlign: "center",
                padding: "20px 0",
                fontWeight: "500",
                color: "#292929"
                }}>Formularz zgłoszeniowy</h1>
            <Formik initialValues={{ name:"", lastName: "", email:"", phone:"", terms: false}}
            validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setSubmitting(true);
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            resetForm();
                            setSubmitting(false);
                        }, 500);
                    }}
            >
                {( {values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                       isSubmitting }) =>(
                        <Form className="mx-auto form__container" onSubmit={handleSubmit}
                        style={{
                            padding: "0 20px"
                        
                        }}>
                            {console.log(values)}
                            <Row className="mb-3 formularz_row">
                                <Form.Group as={Col} controlId="formName">
                                    <Form.Label style={{color: "#292929",
                                        textTransform: "uppercase",
                                        margin: "15px 10px 10px 0",
                                    }}>Imię* :</Form.Label>
                                    <Form.Control
                                    style={{
                                        border: "1px solid #222222"
                                    }}
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        className={touched.name && errors.name ? "error" : null}
                                    />
                                    {touched.name && errors.name ? (
                                        <div className="error-message">{errors.name}</div>
                                    ) : null}
                                </Form.Group>
                                <Form.Group controlId="formlastName" as={Col}>
                                    <Form.Label style={{color: "#292929",
                                        textTransform: "uppercase",
                                        margin: "15px 10px 10px 0",
                                    }}>Nazwisko* :</Form.Label>
                                    <Form.Control style={{
                                        border: "1px solid #222222"
                                    }}
                                        type="text"
                                        name="lastName"
                                        placeholder="Nazwisko"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        className={touched.lastName && errors.lastName ? "error" : null}
                                    />
                                    {touched.lastName && errors.lastName ? (
                                        <div className="error-message">{errors.lastName}</div>
                                    ) : null}
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 formularz_row">
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label style={{color: "#292929",
                                        textTransform: "uppercase",
                                        margin: "15px 10px 10px 0",
                                    }}>Email* :</Form.Label>
                                    <Form.Control style={{
                                        border: "1px solid #222222"
                                    }}
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className={touched.email && errors.email ? "error" : null}
                                    />{touched.email && errors.email ? (
                                    <div className="error-message">{errors.email}</div>
                                ) : null}
                                </Form.Group>
                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label style={{color: "#292929",
                                        textTransform: "uppercase",
                                        margin: "15px 10px 10px 0",
                                    }}>Numer telefonu* :</Form.Label>
                                    <Form.Control style={{
                                        border: "1px solid #222222"
                                    }}
                                        type="text"
                                        name="phone"
                                        placeholder="Numer telefonu"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        className={touched.phone && errors.phone ? "error" : null}
                                    />{touched.phone && errors.phone ? (
                                    <div className="error-message">{errors.phone}</div>
                                ) : null}
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 formularz_row">
                                <Col>
                                
                                    <FormSelect as={Col} style={{marginTop: "15px", border: "1px solid #222222"}} required>
                                        <option value="">Wybierz wycieczke:</option>
                                        <option value="gory">Wyprawa w góry</option>
                                        <option value="lwow">Poznaj niesamowity Lwów!</option>
                                        <option value="zamki">Średniowieczne zamki Galicji</option>
                                        <option value="Dnister">Kultura Hucułów</option>
                                    </FormSelect>
                                    
                                </Col>
                                <Col>
                                    <FormSelect as={Col} style={{marginTop: "15px", border: "1px solid #222222"}}>
                                        <option value="">Wybierz miasto wyjazdu</option>
                                        <option value="lwow">Lwów</option>
                                        <option value="luck">Łuck</option>
                                        <option value="kijow">Kijów</option>
                                        <option value="tarnopol">Tarnopol</option>
                                    </FormSelect>
                                </Col>
                                <Col>
                                    <FormSelect as={Col}  style={{marginTop: "15px", border: "1px solid #222222"}} required>
                                        <option value="">Wybierz ilość osób:</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                    </FormSelect>
                                </Col>
                            </Row>
                            <Row className="mb-3 formularz_row">
                                <FormGroup as={Col}
                                           style={{color: "#292929", textTransform: "uppercase"}}>
                                    <FormLabel>Wybierz datę podróży</FormLabel>
                                    <FormControl type="date" style={{border: "1px solid #222222"}} required/>
                                </FormGroup>
                            </Row>
                            <Row className="mb-3 formularz_row">
                                <FormLabel style={{color: "#292929", textTransform: "uppercase"}}>Dodatkowe pytania:</FormLabel>
                                <Col><FormControl as="textarea" style={{height: "150px", marginBottom: "20px", border: "1px solid #222222"}}/></Col>
                            </Row>
                            <FormGroup className="mb-3 formularz_row" id="formGridCheckbox"
                                       style={{display: "flex", textAlign: "justify", fontSize: "14px"}}>
                                <Form.Check
                                    required
                                    name="terms"
                                    onChange={handleChange}
                                    isInvalid={!!errors.terms}
                                    feedback={errors.terms}
                                    id="validationFormik0"
                                    style={{marginRight: "30px", fontSize: "12px", color: "#292929"}}/>
                                Oświadczam, że zapoznałem się z „Regulaminem świadczenia usług pośrednictwa ubezpieczeniowego drogą
                                elektroniczną przez WanderlustTravel i akceptuję zawarte w nim warunki.
                                Oświadczam, że niniejsza umowa ubezpieczenia spełnia moje wymagania i potrzeby ubezpieczeniowe, przy
                                uwzględnieniu składki, jaką jestem skłonny zapłacić. Zawieram ją w wyniku swojej świadomej decyzji.
                                Oświadczam, że zapoznałem się z informacją o przetwarzaniu moich danych osobowych, zawartą w
                                udostępnionym mi dokumencie „Informacja Administratora danych osobowych”."
                            </FormGroup>

                            <Button variant="primary"
                                    type="submit"
                                    onClick={handleSubmit}
                                    isInvalid={!!errors.terms}
                                    style={{
                                        marginBottom: "30px",
                                        marginLeft: "50%",
                                        transform: "translateX(-50%)"
                                    }}>
                                Wyślij zgłoszenie
                            </Button>
                        </Form>
                    )}

            </Formik>
            </div>
        </div>
    );
}


export default Formularz;