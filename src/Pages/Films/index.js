import React, { useState, useLayoutEffect } from 'react'
import * as apisw from '../../services/apisw';
import Table from 'react-bootstrap/Table';

// import header
import Header from '../../Components/Header/index'
//Import CSS
import './styles.css';

function Films() {

  const [filmes, setFilmes] = useState([])
  

  useLayoutEffect(() => {

    apisw.getFilms()
      .then(films => {
        setFilmes(films)
      })
  }, [])

  return (
    <>
    <Header/>
    <div className="padding-principal imagem-background">
        <h1 style={{ marginBottom: 30 }} className="centraliza-titulo titulo-grande">Filmes</h1>

        <div className="centraliza-tabela scroll-table">
            <Table striped bordered hover className="centraliza-colunasTabela">
                <thead>
                    <tr>
                        <th>#id</th>
                        <th>Titulo</th>
                        <th>Diretor</th>
                        <th>Data de realização</th>
                    </tr>
                    
                    {filmes.map((item, i) => {
                        return <tr key={i}>
                            <th>{i+1}</th>
                            <th>{item.title}</th>
                            <th>{item.director}</th>
                            <th>{item.release_date}</th>
                        </tr>
                    })}
                </thead>
            </Table>
        </div>
    </div>
    </>
  )
}
export default Films