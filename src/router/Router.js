import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Pagina1 from '../pages/Pagina1/Pagina1'
import {Pagina2} from '../pages/pagina2/pagina2'

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch> 

                    <Route exact={true} path='/pagina1' component={Pagina1} />
                    <Route exact={true} path='/pagina2' component={Pagina2} />
                    <Redirect to='/pagina1' />

                </Switch>
            </BrowserRouter>
        </div>
    )
}

