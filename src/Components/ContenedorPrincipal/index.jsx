import React from 'react';

import './estilos.scss'

const ContenedorPrincipal = ({ encabezado, children, clases="" }) => {
    return ( 
        <div className={`contenedor-principal ${ clases }`}>
            <div className="contenedor-principal__contenedor">
                <div className="contenedor-principal__contenedor__encabezado">
                    { encabezado }
                </div>
                <div className="contenedor-principal__contenedor__contenido">
                    { children }
                </div>
            </div>
        </div>
     );
}
 
export default ContenedorPrincipal;
