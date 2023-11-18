import 'regenerator-runtime'; /* for async await transpile */
import './component/app-bar';
import './component/hero-element';
import './component/footer-copyright';
import '../styles/main.css';
import '../styles/restaurants.css';
import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawerMobile'),
  content: document.querySelector('#mainContent'),
  header: document.querySelector('#headerApp'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
