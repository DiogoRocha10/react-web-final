import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
//import components
import {Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import {Delete}  from '@material-ui/icons';
import Header from '../../Components/Header/index'
//import css
import './styles.css'
//Services
import {db} from '../../backend/firebase'

export default function RegistroLista() {

    const [lista, setLista] = useState([])

    //pegar registros
    const getRegistros = async () => {
        db.collection("registros").onSnapshot((querySnapchot) => {
            const docs = []
            querySnapchot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })
            setLista(docs)
        })
        
    }
    //excluir registro
    const excluir = async () => {
        db.collection("registros").onSnapshot((querySnapchot) => {
            const docs = []
            querySnapchot.forEach((doc) => {
                doc.ref.delete()
            })
            setLista(docs)
        })
        
    }
    
    useEffect(() => {
        getRegistros();
    }, [])


    return (
        <div>
            <Header />
            <Grid container spacing={1}>
                <Grid item sm={12} xs={6}>
                    <TableContainer component={Paper} >
                        <Table className="centraliza" >
                            <TableHead className="centraliza">
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell align="right">Registro</TableCell>
                                    <TableCell align="right">Data</TableCell>
                                    <TableCell align="right">Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {lista.map((item, key) => {
                                    return <TableRow key={key}>
                                        <TableCell component="th" scope="row">
                                            {item.nome}
                                        </TableCell>
                                        <TableCell align="right">{item.registro}</TableCell>
                                        <TableCell align="right">{item.data}</TableCell>
                                        <TableCell align="right">
                                            <Button
                                                variant="contained"
                                                onClick={() => excluir()}
                                                color="primary"
                                                startIcon={<Delete />}>
                                                Excluir
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                }
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item sm={12} xs={12}>
                        <Link to="/registrar" className="btn">Novo Registro</Link>
                </Grid>
            </Grid>
        </div>
    )
}