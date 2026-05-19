import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Hero.css'

function Hero(){
return(
    <section id="hero">
      
      <div className="hero-blob hb2"></div>
      <div className="hero-blob hb3"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text rev-l">
            <div className="sec-tag">✨ Plataforma #1 para niños</div>
            <h1>
              Aprende,<br />
              <span>Juega</span> y<br />
              Crece 🌟
            </h1>
            <p>
              La app de aprendizaje más divertida para niños de 4 a 12 años. 
              Método Montessori + Piaget + IA adaptativa para el futuro de tu hijo.
            </p>
            <div className="hero-btns">
              <a href="/cursos" className="btn btn-y" style={{ fontSize: '1.05rem' }}>
                📚 Ver Cursos
              </a>
              <a href="#features" className="btn btn-wh" style={{ fontSize: '1.05rem' }}>
                ✨ Conocer más
              </a>
            </div>
            <div className="hero-badges">
              <div className="hbadge">✅ Seguro para niños</div>
              <div className="hbadge">🆓 Gratis para empezar</div>
              <div className="hbadge">🧠 Aval pedagógico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
);
};

export default Hero