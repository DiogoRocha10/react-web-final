import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Menu = () => (
    <nav classname="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/home">
                    Home
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/recados">
                    Recados
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/chat">
                    ChatBot
                </Link>
            </li>
        </ul>
    </nav>
)

export default Menu