import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanages-map'

function Routes(){
    return (
        <BrowserRouter>
            {/* Garante que apenas uma rota será acionada (Opcional) */}
            <Switch>
                {/* Rotas são comparadas no modo "contem" e o exact torna a comparação por igualdade */}
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;