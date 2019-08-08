import { comprobarDNI } from './helper.js'

export function validacionFinal(nodos) {
    console.dir('nodos', nodos)
    let r = false
    let nodoHTML = null
    nodos.some(nodo => {
        if (!nodo.inputElement.children.length) {
            return false
        }
        nodoHTML = nodo.inputElement.children[0]
        if (nodo.name === 'dni') { // nodo del dni
            nodoHTML.setCustomValidity('')
            if (nodoHTML.value && !comprobarDNI(nodoHTML.value)) {
                nodoHTML.setCustomValidity('Letra del DNI incorrecta') 
            }    
        }
        if( !nodoHTML.checkValidity()) {
            nodo.nextElementSibling.innerHTML = 
                nodoHTML.validationMessage
            nodo.nextElementSibling.verticalAlign = 'top'
            nodo.nextElementSibling.verticalOffset = nodo.offsetTop - window.scrollY + 20
            nodo.nextElementSibling.horizontalOffset = nodo.offsetLeft
            nodo.nextElementSibling.open()
            r = false  
            return true                 
        } else {
            r = true
            nodo.nextElementSibling.close()
        }
    });
    return r
}