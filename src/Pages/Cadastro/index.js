import React, { useState} from 'react';
import { Link} from 'react-router-dom';
//css
import {Grid, TextField, Button, FormGroup }from '@material-ui/core';
import './styles.css';
//services
import * as AuthService from '../../services/AuthService'

function Cadastro() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [msg, setMsg] = useState("")

    const createUser = () => {

        AuthService.saveUser(email, password)
        .then(retorno => {
            setMsg("Usuário Cadastrado")
            setEmail("")
            setName("")
            setPassword("")
        })
        .catch(erro => {
            setMsg(erro.message)
        })
    }

        return (
            <div className="padding-login imagem-background-login">
                <div className="painel">
                    <h1 className="centraliza-titulo">Cadastro</h1>
                    <FormGroup >
                        <TextField 
                            id="filled-basic" 
                            variant="filled"         
                            label="Nome Completo"
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
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
                       
                        <Grid item sm={10} xs={10} style={{ textAlign: "center", color: "red", marginBottom: 5, fontSize: 18 }}>
                            {msg}
                        </Grid>

                        <Button 
                            variant="outlined" 
                            color="secondary"
                            className="button-logar" 
                            onClick={createUser}
                        >Criar Conta</Button>

                        <div className="criar-cadastro">
                            <Link to="/">Já tenho uma conta</Link>
                        </div>
                    </FormGroup >
                </div>
            </div>
        )
    }
export default Cadastro