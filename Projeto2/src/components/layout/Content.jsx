import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'

import Inicial from '../../views/contents/Inicial'
import Sobre from '../../views/contents/Sobre'
import Detalhes from '../../views/contents/Detalhes'
import Campanhas from '../../views/contents/Campanhas'
import Eventos from '../../views/contents/Eventos'
import Noticias from '../../views/contents/Noticias'
import Obras from '../../views/contents/Obras'


const Content = props => (
    <main className="Content">
        <Switch>
            
            <Route path="/Inicial">
                <Inicial />
            </Route>
            <Route path="/Sobre">
                <Sobre />
            </Route>
            <Route path="/Detalhes">
                <Detalhes />
            </Route>
            <Route path="/Campanhas">
                <Campanhas />
            </Route> 
            <Route path="/Eventos">
                <Eventos />
            </Route>    
            <Route path="/Noticias">
                <Noticias />
            </Route>
            <Route path="/Obras">
                <Obras />
            </Route>
        </Switch>
    </main>
)
export default Content
