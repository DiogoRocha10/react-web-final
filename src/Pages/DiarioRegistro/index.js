import React, { useState } from 'react'
import { Link} from 'react-router-dom'
//components
import Header from '../../Components/Header/index'
import { Button, Grid, TextField} from '@material-ui/core';

import {db} from '../../backend/firebase'

export default function Registro() {

    const [nome, setNome] = useState("")
    const [registro, setRegistro] = useState("")
    const [data, setData] = useState("")
    const [msg, setMsg] = useState("")

    const limpar = () => {
        setNome("")
        setRegistro("")
        setData("")
    }

    const salvarRegistro = () => {
        db.collection('registros').doc().set({
            nome: nome,
            registro: registro,
            data: data
        })
        .then(() => {
            limpar()
            setMsg('Registro Enviado!')
            return
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return (
        <div>
            <Header />
            <Grid container spacing={1} >
                <Grid item sm={12} xs={12}>
                
                    <TextField
                        label="Nome"
                        variant="filled"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        size="small"
                        type="text"
                        style={{ width: "100%", marginBottom: 10 }} />
                    <TextField
                        value={registro}
                        onChange={(e) => setRegistro(e.target.value)}
                        label="Registro"
                        variant="filled"
                        size="small"
                        type="text"
                        style={{ width: "100%", marginBottom: 10 }} />
                    <TextField
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        variant="filled"
                        size="small"
                        type="date"
                        style={{ width: "100%", marginBottom: 10 }} />
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={salvarRegistro}
                        style={{ float: "right" }}>
                        Enviar Dados
                    </Button>
                    
                    <Link to="/diario" className="btn">Voltar</Link>
                    <Grid item sm={10} xs={10} style={{ textAlign: "center", color: "red", marginBottom: 5, fontSize: 18 }}>
                        {msg}
                    </Grid>
                </Grid>
            </Grid >
        </div>

    )
}