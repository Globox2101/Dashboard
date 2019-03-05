import React from 'react';

import { ReactComponent as UsuarioIcon } from '../../../static/person-icon.svg'
import './estilos.scss'

const Usuario = ({id, nombre, apellido, email}) => {
    return ( 
        <div className="usuario">
            <div className="usuario__contenedor">
                <div className="usuario__contenedor__icono">
                    <UsuarioIcon />
                </div>
                <div className="usuario__contenedor__info">
                    <div className="usuario__contenedor__info__nombre">{ nombre } { apellido }</div>
                    <div className="usuario__contenedor__info__email">{ email }</div>
                </div>
            </div>
            <div className="usuario__id">{ id }</div>
        </div>
     );
}
 
export default Usuario;
