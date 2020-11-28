import React, { useState, useLayoutEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
//Import CSS
import '../Cadastro/styles.css';
import {Grid, TextField, Button, FormGroup, Checkbox}from '@material-ui/core';
//services
import * as AuthService from '../../services/AuthService';

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
            AuthService.login(email, password)
            .then((retorno) => {
                sessionStorage.setItem("uuid", retorno.user.uid)
                if (lembreme === true) {
                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                }
                setMsg("")
                history.push("/home");

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
                    <FormGroup>
                        <TextField 
                            id="filled-basic" 
                            variant="filled"         
                            label="E-mail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />

                        <TextField 
                            id="filled-basic" 
                            variant="filled"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Senha"                       
                            type="password"
                            />
                        <Grid item sm={12} xs={12} style={{ textAlign: "left" }}>
                            <Checkbox
                                checked={lembreme}
                                onChange={(e) => setLembreme(e.target.checked)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            /> Lembre-me
                        </Grid>
                       
                        <Grid item sm={10} xs={10} style={{ textAlign: "center", color: "red", marginBottom: 5, fontSize: 18 }}>
                            {msg}
                        </Grid>

                        <Button 
                            variant="outlined" 
                            color="secondary"
                            className="button-logar" 
                            onClick={login}
                        >Logar</Button>

                        <div className="criar-cadastro">
                            <Link to="/cadastro">Você ainda não possui uma conta?</Link>
                        </div>
                        <div className="criar-cadastro">
                            <Link to="/recado">Quer deixar um recado?</Link>
                        </div>
                    </FormGroup>
                </div>
            </div>
        )
    }
    export default Login