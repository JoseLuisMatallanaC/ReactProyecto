import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import FooTer from './components/FooTer';
import CarD from './components/CarD';
import ListCarDs from './components/ListCarDs';
import React,{Component,useState} from 'react';
import {useEffect } from "react";
import Home from './pages/HomePage';
import Category from './pages/CategoryPage';
import Detail from './pages/DetailPage';

function App(){
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar/>
        </header>
        <section>
          <article>
            <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/category/:categoryId" element={<Category />} />
                <Route exact path="/detail/:categoryId" element={<Detail />} />
              </Routes>
            </div>
          </article>
        </section>
        <footer>
          <FooTer/>  
        </footer>
      </div>
    </BrowserRouter>
  );
  
}

export default App;
