import React from 'react'
import Header from '../../Components/Header/index'
import img from './img/logo.png'
import './styles.css'

function Home() {
    return (
        <div>
            <Header />
            <div className='home'>
                <h1 style={{ marginBottom: 30 }} >Bem vindo ao</h1>
                <img alt='img' src={img}/>
            </div>
        </div>
    )
}

export default Home
