import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `banner-message` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class BannerMessage extends PolymerElement {

    static get template() {
        return html`    
        <style>
            :host{
                background-color: var(--back-color, bisque);
                color: var(--front-color, brown);
                border: 1px solid;
                padding: 1rem 2rem;
                display: none;
                position: relative;
            }
            :host([visible]) {
                display: block;
            }

            :host #closebox {
                cursor: pointer;
            }

            :host([type="critical"]) {
                background-color: var(--back-color, coral);
                color: var(--front-color, brown);
                font-weight: bolder;
            }

        </style>
        <div id="content" class="message">
            <span id="closebox">[X] </span>
            <slot name="text">Mensaje por defecto</slot>
        </div>
        `;
    }    

    static get properties() {
        return {
            visible: {
                type: Boolean,
                value: true,
                reflectToAttribute: true,
                notify: true
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
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
        let closeBox = this.$.closebox
        closeBox.addEventListener('click', ev => {
            this.visible = false
            console.log('Banner closed')
        })
    }
}

customElements.define('banner-message', BannerMessage);