import React from 'react';
import ReactDOM from 'react-dom/client';

import {mensajeLogin} from "./NavBar.js"


function Modal(props){
    return(
        <div className="modal" id={props.id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{props.mensajeHeader}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body"> 
                        <ModalBody mensajeHeader={props.mensajeHeader}/>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>            
    );
}
function ModalBody(props){
    if(props.mensajeHeader == mensajeLogin)
        return (<ModalBodyLogin/>);
    else
    return (<p>Registro de Compras</p>);
}
function ModalBodyLogin(){
    return (
        <form action="" className="was-validated" id='form_login'>
            <div className="mb-3 mt-3">
                <label htmlFor="userLogin" className="form-label">Usuario:</label>
                <input type="text" className="form-control" id="userLogin" placeholder="Ingrese su Usuario" 
                    name="userLogin" required/>
                <div className="valid-feedback">Dato Valido.</div>
                <div className="invalid-feedback">Por favor verifique el valor de este campo.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="passwordLogin" className="form-label">Contraseña:</label>
                <input type="password" className="form-control" id="passwordLogin" 
                    placeholder="Ingrese su Contraseña" name="passwordLogin" required/>
                <div className="valid-feedback">Dato Valido.</div>
                <div className="invalid-feedback">Por favor verifique el valor de este campo.</div>
            </div>
            <button type="reset" className="btn btn-primary">Limpiar</button>
            <button type="submit" id='sendLogin' className="btn btn-primary margin_l_20">Enviar</button>
        </form>
    );
}

export default Modal;