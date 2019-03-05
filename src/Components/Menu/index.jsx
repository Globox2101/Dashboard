import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom' 
import './estilos.scss'

import { ReactComponent as Logo } from '../../static/flash.svg'
import { ReactComponent as InicioIcono } from '../../static/home-icon.svg'
import { ReactComponent as AgregarIcono } from '../../static/add-icon.svg'
import { ReactComponent as ListaIcono } from '../../static/list-icon.svg'
import { ReactComponent as CerrarIcono } from '../../static/close-icon.svg'


class Menu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            desplegado: false,
         }
    }
    manejarDespliegueMenu = () => {
        this.setState({
            ...this.state,
            desplegado: !this.state.desplegado
        })
    }

    render() { 
        return ( 
        <>
            <nav className="navegacion">
                <div onClick={ this.manejarDespliegueMenu } className="icono-menu">≡</div>
                <h1 className="encabezado">
                    <Logo /> Faster
                </h1>
                <div className={`contenedor ${ this.state.desplegado ? 'desplegado' : '' } `}>
                    <NavLink activeClassName="activo" to="/inicio" className="enlace">
                        <InicioIcono />Inicio
                    </NavLink>
                    <NavLink activeClassName="activo" to="/agregar-usuario" className="enlace">
                        <AgregarIcono />Agregar persona
                    </NavLink>
                    <NavLink activeClassName="activo" to="/lista-usuarios" className="enlace">
                        <ListaIcono />Lista de personas
                    </NavLink>  
                    <NavLink activeClassName="activo" to="/login" className="enlace">
                        <CerrarIcono />Cerrar sesion
                    </NavLink>  
                </div>
            </nav>
            <div className={`fondo__negro ${ this.state.desplegado ? '' : 'ocultar' }`} onClick={ this.manejarDespliegueMenu } ></div>
        </>
        );
    }
}

 
export default Menu;