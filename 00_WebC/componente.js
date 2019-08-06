/* En una segunda etapa de los Web Components,
la especificación  HTML Imports se sustituye por los módulos de ES6,
con lo que queda
    - ES6 Modules
    - HTML Templates
    - Custom Elements
    - ShadowDOM

	La implementación de los componentes se lleva a ficheros js
	y no queda muy claro que aportan los HTML Templates
*/


class PruebaComponente extends HTMLElement{
	constructor() {
		super()
		this.user = 'Pepe'
		this.attachShadow({mode: 'open'}).innerHTML = `
		<div>
			<h2>Probando un componente</h2>
			<p>Hola ${this.user}</p>
		</div>`

		this.shadowRoot.innerHTML += 
			document.querySelector('#tmp-prueba').innerHTML
	}
}

customElements.define('app-prueba', PruebaComponente)