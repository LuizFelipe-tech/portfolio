import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // 1. Importa a "planta da casa"
import './styles/global.css' // Importa estilos globais

// 2. Encontra o "terreno" no HTML e inicia a construção
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* 3. Manda construir a casa (App) */}
  </React.StrictMode>,
)
import { DynamicTextEffect } from './components/features/hero/dynamic-text-effect.ts'; 
import { ParticleAnimationSystem } from './components/features/hero/particle-animation.ts';
import {BurgerMenu} from './components/features/hero/burger-menu.ts'
import './styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu().manageMenu()

  new DynamicTextEffect().start();
  new ParticleAnimationSystem();
});
