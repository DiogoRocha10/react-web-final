import React, {useEffect, useState} from 'react';
//components
import Header from '../../Components/Header/index'
//css
import Table from 'react-bootstrap/Table';
import '../Cadastro/styles.css';
import './styles.css'
//services
import {db} from '../../backend/firebase'


function Recados() {
    const [item, setItem] = useState([])
    const getRecados = async () => {
        db.collection("recados").onSnapshot((querySnapchot) => {
            const docs = []
            querySnapchot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })
            setItem(docs)
        })
        
    }

    useEffect(() => {
        getRecados();
    }, [])

    return (
        <div>
            
        <Header />
        <div className="padding-principal">
        <h1 style={{ marginBottom: 30 }} className="centraliza-titulo titulo-grande">Recados</h1>

        <div className="centraliza-tabela scroll-table">
       
            <Table striped bordered hover className="centraliza-colunasTabela">
            <thead>
                <tr>
                    <th>#id</th>
                    <th>Nome</th>
                    <th>Recados</th>
                </tr>
            {item.map((item, i) => {
                return <tr key={i}>
                    <th>{i+1}</th>
                    <th>{item.nome}</th>
                    <th>{item.recado}</th>
                </tr>   
                })}
                </thead>

            </Table>
        </div>
        </div>
        </div>
    )
}
export default Recados
