import '../../styles/footer.css';

class FooterCopyright extends HTMLElement {
  // constructor() {
  //   super();
  //   // this.shadowDOM = this.attachShadow({ mode: "open" });
  // }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer-copyright" id="footerLarge" tabindex="0" >
         <span>Copyright © 2023 -</span>
         <span class="copy-brand">Makanz Corporation</span>
      </div>
      <div class="footer-copyright" id="footerSmall" tabindex="0" >
         <span>© 2023 -</span>
         <span class="copy-brand">Makanz</span>
      </div>
    `;
  }
}

customElements.define('footer-copyright', FooterCopyright);
