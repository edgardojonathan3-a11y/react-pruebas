import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './page';
import Hero from './hero'

// Este es el componente para la ruta "/"
function Home() {
  return (
    <div>
     <Navbar user={null} />
     <Hero />
      <div>Hola</div>
    </div>
  );
}

// Este es el componente para la ruta "/solo-nav"
function SoloNav() {
  return( 
  <div>
    <Navbar user={null} />
    <h1>adios</h1>
  </div>);
}

// App es el componente principal con las rutas
function App() {
  return (
    <BrowserRouter>
      <div>
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solo-nav" element={<SoloNav />} />
          <Route path="/Hero" element={ <Hero />}/>
        </Routes>
        <div style={{ padding: '10px', background: '#f0f0f0' }}>
          <Link to="/" style={{ margin: '10px' }}>App Normal</Link>
          <Link to="/solo-nav" style={{ margin: '10px' }}>Solo Navbar</Link>
          <Link to="/Hero" >Solo hero</Link>
        </div>

      </div>
    </BrowserRouter>
  );
}


function Hola(){
  return(
    <div>
      hola23
    </div>
  );
}

export default App;
