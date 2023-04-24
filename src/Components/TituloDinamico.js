class TituloDinamico extends HTMLElement {
   constructor() {
      super();

      const shadow = this.attachShadow({mode:"open"});

      //base do component
      const componentRoot = document.createElement("h1");
      componentRoot.textContent = this.getAttribute("titulo");


      //estilizar o component
      const style = document.createElement("style");
      style.textContent = `
      h1{
         color: red;
      }
      `;

      //enviar para a shadow;
      // Todos os componentes criados são inseridos abaixo;
      //.appendChild() = pendurar um filho no shadow;
      shadow.appendChild(componentRoot);
      shadow.appendChild(style);
   }
}

//define o que está se criando com um nome específico.
customElements.define("titulo-dinamico",TituloDinamico);