import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Menu = () => (
    <nav class="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/">
                    Home
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/films">
                    Films
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/planets">
                    Planets
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/people">
                    People
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/species">
                    Species
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/starships">
                    Starships
                </Link>
            </li>
        </ul>
    </nav>
)

export default Menu