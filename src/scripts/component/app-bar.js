import '../../styles/app-bar.css';

class AppBar extends HTMLElement {
//   constructor() {
//     super();
//     // this.shadowDOM = this.attachShadow({ mode: "open" });
//   }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar">
         <div class="wrapper">
            <div class="hamburger-wrapper">
               <button id="hamburger">☰</button>
            </div>
            <a class="navbar-logo" href="./">
               <span class="main-name">Makan</span><span class="sub-name">z.</span>
            </a>
            <div id="drawer">
               <ul>
                  <li><a href="#/home">Home</a></li>
                  <li><a href="#/favorite">Favorite</a></li>
                  <li><a href="https://www.linkedin.com/in/mfalahabdurrafi/">About Us</a></li>
               </ul>
            </div>
         </div>
      </nav>
      <div id="drawerMobile">
         <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/mfalahabdurrafi/">About Us</a></li>
         </ul>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
