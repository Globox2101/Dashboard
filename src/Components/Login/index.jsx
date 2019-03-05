import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import { ReactComponent as UsuarioIcono} from '../../static/person-icon.svg'
import { ReactComponent as LockIcono} from '../../static/lock-icon.svg'
import { ReactComponent as Logo} from '../../static/flash.svg'

import './estilos.scss'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <main className="login">
                <div className="login__contenedor">
                    <div className="login__contenedor__encabezado">
                        <Logo />
                        Faster
                    </div>
                    <div className="login__contenedor__campos">
                        <div className="login__contenedor__campos__input input__contenedor">
                            <div className="input__icon">
                                <UsuarioIcono />
                            </div>
                            <input type="text" className="input" placeholder="Usuario" />
                        </div>
                        <div className="login__contenedor__campos__input input__contenedor">
                            <div className="input__icon">
                                <LockIcono />
                            </div>
                            <input type="password" className="input" placeholder="Contraseña" />
                        </div>
                    </div>
                    <div className="login__contenedor__opciones">
                        <div className="login__contenedor__opciones__recordar">
                            <input type="checkbox" id=""/> Recuerdame
                        </div>
                        <div className="login__contenedor__opciones__olvidar"><a href="/">¿Olvidaste la contraseña?</a> </div>
                    </div>
                    <div className="login__contenedor__botones">
                        <NavLink to="/inicio" className="login__contenedor__botones__boton boton boton--negro">Ingresar</NavLink>
                        <button className="login__contenedor__botones__boton boton boton--amarillo">Registrate</button>
                    </div>
                </div>
            </main>
         );
    }
}
 
export default Login;