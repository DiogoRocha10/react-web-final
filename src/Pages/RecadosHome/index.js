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
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Assunto</th>
                    <th>Recado</th>
                </tr>
            {item.map((item) => {
                return <tr key={item}>
                    <th>{item.nome}</th>
                    <th>{item.email}</th>
                    <th>{item.assunto}</th>
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
