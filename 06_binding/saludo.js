import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `user-saludo` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class UserSaludo extends PolymerElement {
    static get template() {
        return html`
	<h2>Saludo</h2>
	<input type="text" name="in-nombre" id="in-nombre"
        value={{user.nombre::input}} placeholder="Nombre">
    <input type="text" name="in-apellido" id="in-apellido"
		value={{user.apellido::input}} placeholder="Apellido">
	<p>Hola [[user.nombre]] [[user.apellido]]</p>
	<button on-click='onClickBorrar'>Borrar</button>
	`;
    }
    
    static get properties() {
        return {
            user : {
                type: Object,
                value:  () => {
                    return {nombre: '', apellido: ''}
                },
                notify: true
            },
        }
    }


    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }

    onClickBorrar(ev) {
        this.user = {nombre : '', apellido: ''}
    }
}

customElements.define('user-saludo', UserSaludo);