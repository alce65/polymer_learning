import {html, PolymerElement} from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@polymer/iron-collapse/iron-collapse.js'
/**
 * `proyecto-element`
 * 
 *
 * @customElement
 * @polymer
 */
class ProyectoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .resaltado {
          color: bisque;
          background-color: brown;
        }
      </style>
      <h2>Hola [[user]], saludos desde [[name]]!</h2>
      <button on-click="onBtnClick">Haz click</button>
      <p>Uso de elementos del catálogo de Polymer</p>
      <button on-click="onBtnInfo">Ver más informacion</button>
      <iron-collapse id="collapse" opened="[[isDesplegado]]">
        <div>Content goes here......</div>
      </iron-collapse>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'Proyecto Element'
      },
      user: String,
      isDesplegado: {
        type: Boolean,
        value: true
      }
    };
  }

  onBtnClick(ev) {
    ev.path[0].classList.toggle('resaltado')
  }

  onBtnInfo() {
    console.dir(this)
    this.isDesplegado = !this.isDesplegado
  }
}

window.customElements.define('pry-element', ProyectoElement);
