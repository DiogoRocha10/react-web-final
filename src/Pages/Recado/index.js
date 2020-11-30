import React, { useState} from 'react';
import { Link } from 'react-router-dom';
//Import CSS
import '../Cadastro/styles.css';
import {Grid, TextField, Button, FormGroup, TextareaAutosize}from '@material-ui/core';
//services
import {db} from '../../backend/firebase'


function Recado() {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [assunto, setAssunto] = useState("")
    const [recado, setRecado] = useState("")
    const [msg, setMsg] = useState("")
    
    const salvarRecado = () => {
            db.collection('recados').doc().set({
                nome: name,
                email: email,
                assunto: assunto,
                recado: recado
            })
            .then(() => {
                setName('')
                setRecado('')
                setAssunto('')
                setEmail('')
                setMsg('Recado Enviado!')
                return
            })
            .catch((e) => {
                console.log(e)
            })
        }

        return (
            <div className="padding-login imagem-background-login">
                <div className="painel">
                    <h1 className="centraliza-titulo">Recado</h1>
                    <FormGroup>
                        <TextField 
                            id="filled-basic" 
                            variant="filled"         
                            label="Nome"
                            type="text"
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
                            label="Assunto"
                            type="text"
                            value={assunto}
                            onChange={(e) => setAssunto(e.target.value)}
                            />

                        <TextareaAutosize
                            value={recado}
                            onChange={(e) => setRecado(e.target.value)}
                            rowsMax={8}
                            rows={5}
                            aria-label="maximum height"
                            placeholder="Digite seu recado"
                            />
            
                       
                        <Grid item sm={10} xs={10} style={{ textAlign: "center", color: "red", marginBottom: 5, fontSize: 18 }}>
                            {msg}
                        </Grid>

                        <Button 
                            variant="outlined" 
                            color="secondary"
                            className="button-logar" 
                            onClick={salvarRecado}
                        >Enviar</Button>

                        <div className="criar-cadastro">
                            <Link to="/">Voltar para o Login</Link>
                        </div>
                    </FormGroup>
                </div>
            </div>
        )
    }
export default Recado