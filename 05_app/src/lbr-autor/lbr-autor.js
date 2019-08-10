import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-collapse/iron-collapse.js'
import '@polymer/iron-icon/iron-icon.js'
import '@polymer/iron-icons/iron-icons.js'

import { Autor } from '../models/autor.js'

/**
 * `lbr-autor` Description
 *
 * @customElement
 * @polymer
 * 
 */
class LbrAutor extends PolymerElement {
	static get template() {
		return html`
		<style>
			h2 {
				color: brown;
				background-color: bisque;
				padding: 1rem;
				display: flex;
				align-items: center;
			}
			h2 span {
				cursor: pointer;
				margin: 0 0.3rem;
			}
			.favorito {
				text-decoration: underline;
			}
		</style>
		<h2>
		<span>[[num]]</span>
		<span on-click="onClickFavorito"><iron-icon icon="[[icono]]"></iron-icon></span>
		<span on-click="onClickNombre" class$="[[claseTitle]]">[[autor.nombre]]</span>
		</h2>
		<iron-collapse id="collapse" opened=[[isOpen]]>
			<table>
				<tr>
					<td>País</td>
					<td>[[autor.pais]]</td>
				</tr>
				<tr>
					<td>Género</td>
					<td>[[autor.genero]]</td>
				</tr>
				<tr>
					<td>Info</td>
					<td>[[autor.info]]</td>
				</tr>
			</table>		
	  	</iron-collapse>
`;
	}
	
	static get properties() {
		return {
			component : {
				type: String,
				value: 'LbrAutor'
			},
			autor : {
				type: Autor,
				value:  () => {
					return {
						nombre: String,
						pais: String,
						genero: String,
						info: String
					}
				}
			},
			arrayPosition: {
				type: Number,
				value: 0,
				reflectToAttribute: true
			},
			isOpen: {
				type: Boolean,
				value: false
			},
			isFavorite: {
				type: Boolean,
				value: false
			},
			icono : {
				type: String,
				computed: '_ajustarFavorito(isFavorite)',
			},
			claseTitle : {
				type: String,
				computed: '_ajustarTitutlo(isFavorite)',
			},
			num: {
				type: Number,
				computed: '_calcNumber(arrayPosition)'
			}
		}
	}

	/**
	 * Instance of the element is created/upgraded. Use: initializing state,
	 * set up event listeners, create shadow dom.
	 * @constructor
	 */
	constructor() {
		super();
		console.log(this.autor)
	}

	/**
	 * Use for one-time configuration of your component after local
	 * DOM is initialized.
	 */
	ready() {
		super.ready();
	}

	onClickNombre() {
		this.isOpen = !this.isOpen
		// equivalente imperativo
		// this.$.collapse.opened = this.isOpen
	}

	_ajustarFavorito(isFavorite) {
		if (isFavorite) {
			return 'icons:favorite'
		}
		return 'icons:favorite-border'
	}
	_ajustarTitutlo(isFavorite) {
		if (isFavorite) {
			return 'favorito'
		}
		return ''
	}

	_calcNumber(arrayPosition) {
		return ++arrayPosition
	}

	onClickFavorito() {
		this.isFavorite = !this.isFavorite
	}
}

customElements.define('lbr-autor', LbrAutor);