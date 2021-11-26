import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'

import Inicial from '../../views/contents/Inicial'
import Sobre from '../../views/contents/Sobre'
import Detalhes from '../../views/contents/Detalhes'


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
                      
        </Switch>
    </main>
)
export default Content
