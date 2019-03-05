import React, { Component } from 'react';
import './estilos.scss'
import Menu from '../../Menu';
import ContenedorPrincipal from '../../ContenedorPrincipal'

class AgregarUsuarios extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            inputNombre: {
                nombre: "nombres",
                clases: "nombre",
                placeholder: "Nombre/s",
                tipo: "text"
            },

            inputDireccion: {
                nombre: "direccion",
                clases: "direccion",
                placeholder: "Dirección",
                tipo: "textarea"
            },

            inputEmail: {
                nombre: "email",
                clases: "email",
                placeholder: "Correo electronico",
                tipo: "email"
            },

            primeraSeccion: {
                titulo: "",
                opciones: [
                    {
                        nombre: "primerApellido",
                        clases: "primer-apellido",
                        placeholder: "Primer apellido",
                        tipo: "text"
                    },
                    {
                        nombre: "segundoApellido",
                        clases: "segundo-apellido",
                        placeholder: "Segundo apellido",
                        tipo: "text"
                    },
                ]
            }, 

            segundaSeccion: {
                titulo: "",
                opciones: [
                    {
                        nombre: "nacimiento",
                        clases: "fecha-nacimiento",
                        placeholder: "Fecha de nacimiento",
                        tipo: "date"
                    },
                    {
                        nombre: "genero",
                        clases: "genero",
                        placeholder: "Genero",
                        tipo: "select",
                        opciones: [
                            "Hombre",
                            "Mujer"
                        ]
                    },
                    {
                        nombre: "estadoCivil",
                        clases: "estado-civil",
                        placeholder: "Estado civil",
                        tipo: "select",
                        opciones: [
                            "Casado",
                            "Soltero",
                        ]
                    },
                ]
            },

            terceraSeccion: {
                titulo: "",
                opciones: [
                    {
                        nombre: "edad",
                        clases: "edad",
                        placeholder: "Edad",
                        tipo: "number"
                    },
                    {
                        nombre: "telefono",
                        clases: "telefono",
                        placeholder: "Numero telefónico",
                        tipo: "tel"
                    },
                    {
                        nombre: "cedula",
                        clases: "cedula",
                        placeholder: "Cédula",
                        tipo: "text"
                    },
                ]
            }
         }
    }


    generarInput = ({ nombre, clases, placeholder, tipo, opciones }, i = 0) => {
        let inputJSX = null;

        if(tipo === "select")
        {
            inputJSX = (
                <select key={ i } className={ clases }>
                    <option> { placeholder } </option>
                {
                    opciones.map((texto, index) => (
                        <option key={ index } value={ texto }>{ texto }</option>
                    ))
                }
                </select>
            )           
        }

        else if(tipo === "textarea")
        {
            inputJSX = <textarea key={ i } className={ clases } placeholder={ placeholder }></textarea>
        }

        else
        {
            inputJSX = <input key={ i } type={ tipo } className={` input ${ clases } `} placeholder={ placeholder } />
        }

        return inputJSX
    }

    render() {         
        return ( 
            <div className="agregar">
                <Menu />
                <ContenedorPrincipal clases="agregar-usuarios" encabezado="Agregar persona">
                    <form className="formulario">
                        {
                            this.generarInput(this.state.inputNombre, 250)
                        }
                        <div className="seccion primera-seccion">
                        {
                            this.state.primeraSeccion.opciones.map( (input, index) => this.generarInput(input, index) )
                        }
                        </div>
                        {
                            this.generarInput(this.state.inputEmail)
                        }
                        <div className="seccion segunda-seccion">
                        {
                            this.state.segundaSeccion.opciones.map((input, index) => this.generarInput(input, index) )
                        }
                        </div>
                        <div className="seccion tercera-seccion">
                        {
                            this.state.terceraSeccion.opciones.map((input, index) => this.generarInput(input, index) )
                        }
                        </div>
                        {
                            this.generarInput(this.state.inputDireccion, 300)
                        }

                        <button className="boton boton--bien">Agregar</button>
                        <button className="boton boton--borrar" type="reset">Borrar</button>
                    </form>
                </ContenedorPrincipal>
            </div>
         );
    }
}
 
export default AgregarUsuarios;