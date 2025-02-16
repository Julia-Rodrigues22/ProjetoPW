import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                
                <li> 
                    <Link to="/Inicial">Inicial</Link>
                </li>
                <li> 
                    <Link to="/Sobre">Sobre</Link>
                </li>                                
                <li> 
                    <Link to="/Detalhes">Detalhes</Link>
                </li>
                <li> 
                    <Link to="/Campanhas">Campanhas</Link>
                </li>
                <li> 
                    <Link to="/Eventos">Eventos</Link>
                </li> 
                <li> 
                    <Link to="/Noticias">Noticias</Link>
                </li> 
                <li> 
                    <Link to="/Obras">Obras</Link>
                </li>                     
            </ul>
        </nav>
    </aside>
)
export default Menu
