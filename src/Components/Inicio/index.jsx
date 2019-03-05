import React, { Component } from 'react';
import './estilos.scss'

import Menu from '../Menu'

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="inicio">
                <Menu />
                <div className="contenedor-principal">
                    
                </div>
            </div> 
        );
    }
}
 
export default Inicio;