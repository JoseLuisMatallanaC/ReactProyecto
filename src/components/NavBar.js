import React from 'react';
import ReactDOM from 'react-dom/client';
import './../App.css';
import Modal from './Modal';

export const mensajeLogin = 'Inicio de Sesión';
export const mensajeCart = 'Mi Carrito';
export const idModalLogin = 'idModalLogin';
export const idModalCart = 'idModalCart';
var mensaje = '';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">                
                <a className="navbar-brand" href="#">E-commerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbars" aria-controls="navbars" 
                    aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbars">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" 
                                aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Hogar</a></li>
                                <li><a className="dropdown-item" href="#">Tecnología</a></li>
                                <li><a className="dropdown-item" href="#">Deportes</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Acerca de Nosotros</a>
                        </li>
                    </ul>
                    <form id='formBusqueda' role="search">
                        <input className="form-control" type="search" placeholder="Buscar" 
                            aria-label="Search"/>                        
                    </form>
                    <button type="button" className="btn btn-primary margin_l_20" id='button_Login'
                        data-bs-toggle="modal" data-bs-target="#idModalLogin">Inicio de Sesión</button>
                    <Modal id={idModalLogin} mensajeHeader={mensajeLogin}/>    
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/shopping-cart.png" 
                        alt="shopping-cart" id='img_Cart' 
                        className="btn" data-bs-toggle="modal" data-bs-target="#idModalCart"/>
                    <Modal id={idModalCart} mensajeHeader={mensajeCart}/>
                    <div id='divModal'></div>
                </div>                
            </div>
        </nav>
    );
}
export default NavBar;