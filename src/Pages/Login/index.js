import React, { useState, useLayoutEffect } from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Firebase from '../../services/FirebaseConnect'
import {Grid}from '@material-ui/core';


//Import CSS
import './styles.css';

function Login() {
    let history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [lembreme, setLembreme] = useState(false)

    useLayoutEffect(() => {

        let emailStorage = localStorage.getItem("email")
        let passwordStorage = localStorage.getItem("password")
        if (emailStorage && passwordStorage) {
            setEmail(emailStorage)
            setPassword(passwordStorage)
            setLembreme(true)
        }

    }, [])

    const login = () => {

        if (lembreme === false) {
            localStorage.removeItem("email")
            localStorage.removeItem("password")
        }

        Firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((retorno) => {
                sessionStorage.setItem("uuid", retorno.user.uid)
                if (lembreme === true) {
                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                }
                setMsg("")
                history.push("/menu");

            })
            .catch((erro) => {
                console.log(erro)
                setMsg("Usuário ou senha inválidos!")
            })
    }

        return (
            <div className="padding-login imagem-background-login">
                <div className="painel">
                    <h1 className="centraliza-titulo">Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Endereço de email</Form.Label>
                                <Form.Control
                                label="E-mail"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
            
                                />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                                <Form.Control 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="Senha"                       
                                type="password"

                                />
                        </Form.Group>
                        <Grid item sm={12} xs={12} style={{ textAlign: "center", color: "red", marginBottom: 5, fontSize: 12 }}>
                            {msg}
                        </Grid>

                        <Button 
                        variant="dark" 
                        className="button-logar" 
                        onClick={login}
                        >Logar</Button>

                        <div className="criar-cadastro">
                            <Link to="/cadastro">Voce ainda não possui uma conta?</Link>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
    export default Login