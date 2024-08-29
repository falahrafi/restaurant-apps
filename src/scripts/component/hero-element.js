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
        <div class="hero-text">
          <h1 class="hero-title">
            Start Your Culinary Journey Now
          </h1>
          <p class="hero-content">
            From hidden local gems to renowned spots, embark on a culinary journey and uncover the finest dining experiences around you.
          </p>
          <a href="#content" class="button-main">Explore Now&ensp;<i class="fas fa-angles-down"></i></a>
        </div>
        <div class="hero-background"><div></div></div>
        <picture class="hero-image">
          <!-- <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.jpg"> -->
          <img src='./images/restaurant-illustration.png' alt="Restaurant Illustration"> 
          <!-- <img src='https://falahrafi.com/restaurant-illustration.png' alt="Restaurant Illustration"> -->
        </picture>
      </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
