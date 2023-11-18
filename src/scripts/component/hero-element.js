import '../../styles/hero.css';

class HeroElement extends HTMLElement {
  // constructor() {
  //   super();
  //   // this.shadowDOM = this.attachShadow({ mode: "open" });
  // }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.jpg">
          <img src='./images/heros/hero-image_1-large.jpg' 
              alt="dirt rally poster">
        </picture>
      </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
