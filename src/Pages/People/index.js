import React, { useState, useLayoutEffect } from 'react'
import * as apisw from '../../services/apisw';
import Table from 'react-bootstrap/Table';

// import header
import Header from '../../Components/Header/index'
//Import CSS
import '../Films/styles.css';

function People() {

  const [pessoas, setPessoas] = useState([])

  useLayoutEffect(() => {

    apisw.getPersons()
      .then(pessoa => {
        setPessoas(pessoa)
      })
  }, [])

  return (
    <>
    <Header/>
    <div className="padding-principal imagem-background">
        <h1 style={{ marginBottom: 30 }} className="centraliza-titulo titulo-grande">Peoples</h1>

        <div className="centraliza-tabela scroll-table">
            <Table striped bordered hover className="centraliza-colunasTabela">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Nome</th>
                        <th>Genero</th>
                        <th>skin color</th>
                        <th>Altura</th>
                        <th>Peso</th>
                    </tr>

                    
                    {pessoas.map((item, i) => {
                        return <tr key={i}> 
                            <th>{i+1}</th>
                            <th>{item.name}</th>
                            <th>{item.gender}</th>
                            <th>{item.skin_color}</th>
                            <th>{item.height}</th>
                            <th>{item.mass}</th>
                        </tr>
                    })}
                </thead>
            </Table>
        </div>
    </div>
    </>
  )
}
export default People