import React, { useState, useLayoutEffect } from 'react'
import * as apisw from '../../services/apisw';
import Table from 'react-bootstrap/Table';

// import header
import Header from '../../Components/Header/index'
//Import CSS
import '../Films/styles.css';

function Planets() {

  const [planetas, setPlanetas] = useState([])

  useLayoutEffect(() => {

    apisw.getPlanets()
      .then(planetas => {
        setPlanetas(planetas)
      })
  }, [])

  return (
    <>
    <Header/>
    <div className="padding-principal imagem-background">
        <h1 style={{ marginBottom: 30 }} className="centraliza-titulo titulo-grande">Planets</h1>

        <div className="centraliza-tabela scroll-table">
            <Table striped bordered hover className="centraliza-colunasTabela">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Nome</th>
                        <th>Clima</th>
                        <th>População</th>
                        <th>Período Orbital</th>
                        <th>Diametro</th>
                        <th>Gravidade</th>
                        <th>Terreno</th>
                    </tr>
                    
                    {planetas.map((item, i) => {
                        return <tr key={i}>
                            <th>{i+1}</th>
                            <th>{item.name}</th>
                            <th>{item.climate}</th>
                            <th>{item.population}</th>
                            <th>{item.orbital_period}</th>
                            <th>{item.diameter}</th>
                            <th>{item.gravity}</th>
                            <th>{item.terrain}</th>
                        </tr>   
                    })}
                </thead>
            </Table>
        </div>
    </div>
    </>
  )
}
export default Planets