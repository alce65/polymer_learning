import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `view-temp` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ViewTemp extends PolymerElement {

    static get template() {
        return html`
        <style>
            input {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
               ;
                }
                .congelado { background-color: darkturquoise}
                .frio {background-color: cornsilk}
                .templado{ background-color: chocolate}
                .caliente {background-color: brown}
        </style>
        
        <h2>Temperaturas</h2>
        <div>
            <output id="out-tempC">[[temperature]]</output> ºC
            <span> | </span>
            <output id="out-tempF">[[tempFahrenheit]]</output> ºF
        </div>
        
        <input type="range" name="rng-temp" id="rng-temp"
        min="0" max="60" step="20" 
        class$='[[tempClass]]'
        value= {{temperature::change}}>
        `;
    }

    static get properties() {
        return {
            temperature: Number,
            tempFahrenheit: {
                type: Number,
                computed: '_calcFahrenheit(temperature)' 
            },
            tempClass: {
                type: String,
                computed: '_calcClass(temperature)'
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
        this.temperature = 0
    }

    setTemperature(ev) {
        this.temperature = ev.target.value
    }

    _calcFahrenheit(temp) {
        return temp * 1.8 + 32
    }

    _calcClass(temp) {
        let clase = 'congelado'
        switch (temp) {
            case '20':
                clase = 'frio'
                break;
            case '40':
                clase = 'templado'
                break;
            case '60':
                clase = 'caliente'
                break;        
        }
        return clase
    }
}

customElements.define('view-temp', ViewTemp);