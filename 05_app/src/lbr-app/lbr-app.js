import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'
import '../lbr-autor/lbr-autor.js'
import AUTORES from './autores.json.js'
import {DomRepeat} from '@polymer/polymer/lib/elements/dom-repeat.js'
/* Los imports del componente lbr-autor hacen innecesario el anterior 
porque trabajan en modo hibrido, válido para polymer 1,
que ya incluia dom-repeat en la librerí inicial */
/**
 * @customElement
 * @polymer
 */
class LbrApp extends PolymerElement {
	static get template() {
		return html`
			<style>
				:host {
					display: block;
				}
				h1 {
					color: brown;
				}
			</style>
			<h1>[[titulo]]!</h1>
			<p>Autores de novela policiaca</p>
			<template is="dom-repeat" items="[[autores]]" as="autor">
				<lbr-autor autor = [[autor]] array-position = [[index]]></lbr-autor>
			</template>
			`;
	}
	static get properties() {
		return {
			titulo: {
				type: String,
				value: 'Libros App',
				reflectToAttribute: true
			},
			autores: {
				type: Array,
				value: () => AUTORES
			}
		};
	}

	constructor() {
		super()
		console.log(this.autores)
	}

}

window.customElements.define('lbr-app', LbrApp);
