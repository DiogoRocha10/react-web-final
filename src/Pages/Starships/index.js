import React, { useState, useLayoutEffect } from 'react'
import * as apisw from '../../services/apisw';
import Table from 'react-bootstrap/Table';

// import header
import Header from '../../Components/Header/index'
//Import CSS
import '../Films/styles.css';
import './styles.css'

function Starships() {

  const [naves, setNaves] = useState([])

  useLayoutEffect(() => {

    apisw.getStarships()
      .then(naves => {
        setNaves(naves)
      })
  }, [])

  return (
    <>
    <Header/>
    <div className="padding-principal naves">
        <h1 style={{ marginBottom: 30 }} className="centraliza-titulo titulo-grande">Starships</h1>

        <div className="centraliza-tabela-starships scroll-table">
            <Table striped bordered hover className="centraliza-colunasTabela">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Nome</th>
                        <th>Capacidade de carga</th>
                        <th>Consumiveis</th>
                        <th>Equipe Técnica</th>
                        <th>Classificação Hyperdrive</th>
                        <th>Comprimento</th>
                        <th>Fabricante</th>
                        <th>Vel. Max. Atmosfera</th>
                        <th>Modelo</th>
                        <th>Qnt. Max. Passageiros</th>
                    </tr>
                    
                    {naves.map((item, i) => {
                        return <tr key={i}>
                            <th>{i+1}</th>
                            <th>{item.name}</th>
                            <th>{item.cargo_capacity}</th>
                            <th>{item.consumables}</th>
                            <th>{item.crew}</th>
                            <th>{item.hyperdrive_rating}</th>
                            <th>{item.length}</th>
                            <th>{item.manufacturer}</th>
                            <th>{item.max_atmosphering_speed}</th>
                            <th>{item.model}</th>
                            <th>{item.passengers}</th>
                        </tr>
                    })}
                </thead>
            </Table>
        </div>
    </div>
    </>
  )
}
export default Starships