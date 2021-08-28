import React from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import { FormGroup, Row, Col, FormLabel, FormControl, FloatingLabel, Button, InputGroup, FormSelect, FormCheck} from "react-bootstrap";
import * as Yup from "yup";
import * as yup from "yup";



const Formularz = () => {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Imię musi posiadać minimum 2 litery!')
            .max(70, 'Za długie!')
            .required('Pole wymagane!'),
        lastName: Yup.string()
            .min(2, 'Nazwisko musi posiadać minimum 2 litery!')
            .max(70, 'Za długie!')
            .required('Pole wymagane!'),
        email: Yup.string()
            .email('Email nieważny')
            .required('Pole wymagane!'),
        phone: Yup.number().min(9, 'Numer musi posiadać 9 cyfr')
            .required('Pole wymagane!'),
        terms: Yup.bool().required().oneOf([true], 'Warunki musza być zaakceptowane'),
    });
    return (
        <div className={'container1'}>
            <h1 className="form__header">Formularz zgłoszeniowy</h1>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    terms: false,
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched, handleSubmit, handleChange, isInvalid }) => (
                    <Form >
                        <Row className="mb-3 formularz_row" >
                            <FormGroup as={Col}>
                                <FormLabel style={{color: "blue",
                                    textTransform: "uppercase",
                                    marginBottom: "10px",
                                    marginRight: "10px"
                                }}>Imię</FormLabel>
                                <Field name="name"  />
                                {errors.name && touched.name ? (
                                    <div>{errors.name}</div>
                                ) : null}
                            </FormGroup>

                            <FormGroup as={Col}>
                                <FormLabel style={{color: "blue",
                                    textTransform: "uppercase",
                                    marginBottom: "10px",
                                    marginRight: "10px"
                                }}>Nazwisko</FormLabel>
                                <FormControl name="lastName"  />
                                <ErrorMessage name="lastName" />
                            </FormGroup>
                        </Row>
                        <Row className="mb-3 formularz_row">
                            <FormGroup as={Col} >
                                <FormLabel style={{color: "blue", textTransform: "uppercase"}}>Email</FormLabel>
                                <FormControl name="email" type="email" />
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}
                                <ErrorMessage name="email" />
                            </FormGroup>
                            <FormGroup as={Col} >
                                <FormLabel style={{color: "blue", textTransform: "uppercase"}}>Telefon</FormLabel>
                                <FormControl  type="tel" name="phone" placeholder="+380 XXX XXX XXX" />
                            </FormGroup>

                        </Row>
                        <Row className="mb-3 formularz_row">
                            <Col>
                                <FormSelect as={Col} style={{marginTop: "15px"}} required>
                                    <option value="">Wybierz wycieczke:</option>
                                    <option value="gory">Wyprawa w góry</option>
                                    <option value="lwow">Pozdnaj niesamowity Lwów!</option>
                                    <option value="zamki">Sredniowieczne zamki Galicji</option>
                                    <option value="Dnister">Splyw statkiem rzeka Dnister</option>
                                </FormSelect>
                            </Col>

                            <Col>
                                <FormSelect as={Col} style={{marginTop: "15px"}}>
                                    <option value="">Wybierz miasto wyjazdu</option>
                                    <option value="lwow">Lwów</option>
                                    <option value="luck">Łuck</option>
                                    <option value="kijow">Kijów</option>
                                    <option value="tarnopol">Tarnopol</option>
                                </FormSelect>
                            </Col>

                            <Col>
                                <FormSelect as={Col}  style={{marginTop: "15px"}} required>
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
                                       style={{color: "blue", textTransform: "uppercase"}}>
                                <FormLabel>Wybierz datę podróży</FormLabel>
                                <FormControl type="date" required/>
                            </FormGroup>
                        </Row>
                        <Row className="mb-3 formularz_row">
                            <FormLabel style={{color: "blue", textTransform: "uppercase"}}>Dodatkowe pytania:</FormLabel>
                            <Col><FormControl as="textarea" style={{height: "150px", marginBottom: "20px"}}/></Col>

                        </Row>
                        <FormGroup className="mb-3 formularz_row" id="formGridCheckbox"
                                   style={{display: "flex", textAlign: "justify", fontSize: "14px"}}>
                            <FormCheck
                                required
                                name="terms"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                id="validationFormik0"
                                style={{marginRight: "30px", fontSize: "12px"}}/>
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
    )

}

export default Formularz;