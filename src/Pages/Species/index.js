import React, { useState, useLayoutEffect } from 'react'
import * as apisw from '../../services/apisw';
import Table from 'react-bootstrap/Table';

// import header
import Header from '../../Components/Header/index'
//Import CSS
import '../Films/styles.css';

function Species() {

  const [species, setEspecies] = useState([])

  useLayoutEffect(() => {

    apisw.getSpecies()
      .then(species => {
        setEspecies(species)
      })
  }, [])

  return (
    <>
    <Header/>
    <div className="padding-principal imagem-background">
        <h1 style={{ marginBottom: 30 }} className="centraliza-titulo titulo-grande">Species</h1>

        <div className="centraliza-tabela scroll-table">
            <Table striped bordered hover className="centraliza-colunasTabela">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Nome</th>
                        <th>Classificação</th>
                        <th>Designação</th>
                        <th>Tempo de vida médio</th>
                        <th>Altura Média</th>
                        <th>Lingua</th>
                        <th>Cor da Skin</th>
                    </tr>

                    
                    {species.map((item, i) => {
                        return <tr key={i}>
                            <th>{i+1}</th>
                            <th>{item.name}</th>
                            <th>{item.classification}</th>
                            <th>{item.designation}</th>
                            <th>{item.average_lifespan}</th>
                            <th>{item.average_height}</th>
                            <th>{item.language}</th>
                            <th>{item.skin_colors}</th>
                        </tr>   
                    })}
                </thead>
            </Table>
        </div>
    </div>
    </>
  )
}
export default Species