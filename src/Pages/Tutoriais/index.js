import React from 'react'
import Header from '../../Components/Header/index'
import Iframe from 'react-iframe'
function Tutoriais() {
    return (
        <div>
            <Header />
            <h1 style={{ marginBottom: 30 }} className="centraliza-titulo titulo-grande">Tutoriais</h1>
            <Iframe url="https://www.youtube.com/embed/bXbf_sfA8yE"
            width="450px"
            height="450px"
            id="myId"
            className="iframe"
            display="initial"
            position="relative"/>

            <Iframe url="https://www.youtube.com/embed/a5IbwtFXepc" 
            width="400px"
            height="450px"
            id="myId"
            className="iframe"
            display="initial"
            position="relative"/>
            <Iframe url="https://www.youtube.com/embed/EtzEp9-N6rc" 
            width="450px"
            height="450px"
            id="myId"
            className="iframe"
            display="initial"
            position="relative"/>
        </div>
    )
}
export default Tutoriais
