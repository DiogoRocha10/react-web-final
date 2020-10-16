import React from 'react';
import Table from 'react-bootstrap/Table';

import Header from '../../Components/Header/index'
//Import CSS
import '../Films/styles.css';


function Planets() {
        return (
        <>
            <Header />
            <div className="padding-principal">
                <h1 style={{ marginBottom: 30 }} className="centraliza-titulo titulo-grande">Planets</h1>

                <div className="centraliza-tabela scroll-table">
                    <Table striped bordered hover className="centraliza-colunasTabela">
                        <thead>
                            <tr>
                                <th>#id</th>
                                <th>Titulo</th>
                                <th>Diretor</th>
                                <th>Data de realização</th>
                            </tr>
                            
                        </thead>
                    </Table>
                </div>
            </div>
            </>
        )
}
export default Planets