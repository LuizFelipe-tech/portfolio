// Os erros sumiram porque agora incluímos a extensão do arquivo.
import { DynamicTextEffect } from './components/dynamic-text-effect.ts'; 
import { ParticleAnimationSystem } from './components/particle-animation.ts';

// O erro sumiu porque declaramos o que é um módulo .css no vite-env.d.ts
import './styles/main.css';

// Seu código de inicialização
document.addEventListener('DOMContentLoaded', () => {
  new DynamicTextEffect().start();
  new ParticleAnimationSystem();
});