import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Import CSS
import './styles.css';

function Login() {

        return (
            <div className="padding-login imagem-background-login">
                <div className="painel">
                    <h1 className="centraliza-titulo">Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Endereço de email</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" 
                                />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha"
                                />
                        </Form.Group>

                        <Button variant="dark" className="button-logar" 
            
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