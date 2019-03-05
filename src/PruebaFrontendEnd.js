import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Inicio from './Components/Inicio'
import Login from './Components/Login'
import ListaUsuarios from './Components/Usuarios/ListaUsuarios'
import AgregarUsuarios from './Components/Usuarios/AgregarUsuarios'

class PruebaFrontendEnd extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch >
            <Route path="/" exact render={() => <Redirect to="/login" /> } />
            <Route path="/login" component={ Login }/>
            <Route path="/inicio" component={ Inicio }/>
            <Route path="/lista-usuarios" component={ ListaUsuarios }/>
            <Route path="/agregar-usuario" component={ AgregarUsuarios }/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default PruebaFrontendEnd;
