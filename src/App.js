import logo from './logo.svg';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import FooTer from './components/FooTer';
import CarD from './components/CarD';

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <section>
        <article>
          <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
            <CarD id='card1' cardTitle='Producto 1' cardPrice='100' cardfeatures1='Ancho: 20cm'
              cardfeatures2='Alto: 20cm' cardfeatures3='Color: Rojo' cardfeatures4='Stock: 100'/>
            <CarD id='card2' cardTitle='Producto 2' cardPrice='100' cardfeatures1='Ancho: 20cm'
              cardfeatures2='Alto: 20cm' cardfeatures3='Color: Rojo' cardfeatures4='Stock: 100'/>
            <CarD id='card3' cardTitle='Producto 3' cardPrice='100' cardfeatures1='Ancho: 20cm'
              cardfeatures2='Alto: 20cm' cardfeatures3='Color: Rojo' cardfeatures4='Stock: 100'/>
          </div>
        </article>
      </section>
      <footer>
        <FooTer/>  
      </footer>
    </div>
  );
}

export default App;
