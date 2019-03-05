import React, { Component } from 'react';

import './estilos.scss'

// import datosUsuarios from '../../../static/listaUsuarios.json'

import algo from '../../../static/listaUsuarios.json'

import ContenedorPrincipal from '../../ContenedorPrincipal'
import Menu from '../../Menu';
import Usuario from '../Usuario'

class ListaUsuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="listar-usuarios">
                <Menu />
                <ContenedorPrincipal clases="lista-usuarios" encabezado="Lista de usuarios" >
                {
                    algo.map((usuario, index) => (
                        <Usuario key={ index } id={ index + 1 } nombre={ usuario.nombres } apellido={`${usuario.primerApellido} ${usuario.segundoApellido}`} email={ usuario.email }/>
                    ))
                }
                </ContenedorPrincipal>
            </div>
         );
    }
}
 
export default ListaUsuarios;