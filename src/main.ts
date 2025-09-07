import { DynamicTextEffect } from './components/dynamic-text-effect.ts'; 
import { ParticleAnimationSystem } from './components/particle-animation.ts';
import {BurgerMenu} from './components/burger-menu.ts'
import './styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu().manageMenu()

  new DynamicTextEffect().start();
  new ParticleAnimationSystem();
});