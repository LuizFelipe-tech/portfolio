import React from 'react';
import ParticleCanvas from './components/features/hero/ParticleCanvas';
import TypingEffect from './components/features/hero/TypingEffect';
import Header from './components/layout/Header';

function App() {
  return (
    <>
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
        
        <section>
          <h1>Testando</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius praesentium, ducimus officia animi ullam iure quas quasi illum nisi quae sapiente necessitatibus minima. Asperiores corporis magni id totam eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi, saepe accusantium exercitationem nisi vel nesciunt beatae veritatis. Rerum dolorum a quod, aliquid eos ullam possimus obcaecati rem sint numquam!</p>
        </section>
      </main>

      <footer>
        <p>Feito por Luiz</p>
      </footer>
    </>
  );
}

export default App;