import React from 'react';
import ParticleCanvas from './components/features/hero/ParticleCanvas';
import TypingEffect from './components/features/hero/TypingEffect';
import Header from './components/layout/Header';

function App() {
  return (
    <>
    {/* This is a single-line comment in JSX */}
      <Header />
      <main>
        <section id="hero-section">
          <ParticleCanvas />
          <article id="hero-content">
            <h1 className="hero-title">Transformando ideias em</h1>
            <h1 className="hero-title" id="dynamic-text">
              <TypingEffect words={['Soluções.', 'Código.', 'Futuro.']} />
            </h1>
            <p id="hero-subtitle">
              Futuro Cientista da Computação, focado em construir soluções de IA que resolvem problemas reais através do <span id="emphasize">código.</span>
            </p>
          </article>
        </section>
      </main>

      <footer>
        <p>Feito por Luiz</p>
      </footer>
    </>
  );
}

export default App;