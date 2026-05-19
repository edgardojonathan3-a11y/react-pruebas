// src/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ user }) => {
  return (
    <>
      <nav id="nav">
        <div className="container">
          <div className="nav-i">
            <a href="/" className="logo">
              <div className="logo-box">⭐</div>
              Kiddsventure
            </a>
            <div className="nav-links">
              <a href="#features">Características</a>
              <a href="#courses">Cursos</a>
              <a href="#testi">Testimonios</a>
              <a href="#pricing">Precios</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="nav-acts">
              {user ? (
                <>
                  <a href="/inicio" className="nav-ghost">Mi Panel</a>
                  <a href="/perfil" className="btn btn-y" style={{padding: "10px 22px", fontSize: ".9rem"}}>
                    Hola, {user.nombre}
                  </a>
                  <a href="/logout" className="nav-ghost" style={{marginLeft: "5px"}}>Salir</a>
                </>
              ) : (
                <>
                  <a href="/login" className="nav-ghost">Iniciar Sesión</a>
                  <a href="/registro" className="btn btn-y" style={{padding: "10px 22px", fontSize: ".9rem"}}>
                    Empezar Gratis 🎉
                  </a>
                </>
              )}
              <button className="ham">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;