import React, {useRef, useState} from "react";
import {Form, Button, Card, Container, Alert} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {AuthProvider, useAuth} from "../../AuthContext";
import {Link} from "react-router-dom";
import HeaderNav from "../home/HeaderNav";

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    
    
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError("Failed to reset password")
        }
        setLoading(false)
    }


    return (
        <>
        <HeaderNav/>
        <AuthProvider>
            <div className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Container>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Zmiana hasła</h2>
                                <Form >
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email"required/>
                                    </Form.Group>
                                    <Button  className="w-100 mt-4" type="submit">Zresetuj hasło</Button>
                                </Form>
                                <div className="w-100 text-center mt-3"> 
                                    <Link to="/login">Wróć do logowania</Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            Need an account? <Link to="/signup">Załóż konto</Link>
                        </div>
                    </Container>
                </div>
            </div>
        </AuthProvider>
        </>
    )
}