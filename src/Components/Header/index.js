import React from 'react'
// import menu
import Menu from '../Menu/index'
// import css
import './styles.css'
// import logo
import Logo from '../../assets/img/logo.png'

const Header = () => (
    <header className="app-header">
        <span className="app-header__logo" >
            <img className='img' src={Logo} alt='imagem ilustrativa'/>
        </span>
        <Menu />
    </header>
)

export default Header