import React, {useRef, useState} from "react";
import {Form, Button, Card, Container, Alert} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderMain from "../home/HeaderMain";
import {AuthProvider, useAuth} from "../../AuthContext";
import {Link, useHistory} from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat";

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfRef = useRef()
    const {signup, currentUser} = useAuth
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfRef.current.value) {
            return setError("Hasła nie są takie same")
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Nie udało się utworzyć profilu")
        }
        setLoading(false)
    }


    return (
        <>
        <HeaderMain/>
        <AuthProvider>
            <div className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100 " style={{maxWidth: "400px"}}>
                    {currentUser && currentUser.email}
                <Container>
                <Card>
                    <Card.Body className=".well">
                        <h2 className="text-center mb-4">Utwórz konto</h2>
                        {error && <Alert variant="danger">{error}</Alert> }
                        <Form onSubmit={handleSubmit} >
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label className="mt-2">Wpisz hasło</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label className="mt-2">Wpisz hasło ponownie</Form.Label>
                                <Form.Control type="password" ref={passwordConfRef}required/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100 mt-4" type="submit">Zarejestruj się</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/Login">Zaloguj się</Link>
                </div>
                </Container>
                </div>
            </div>
        </AuthProvider>
        </>
    )
}