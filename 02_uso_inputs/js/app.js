import { validacionFinal } from "./validacion.js";

export function app() {
    console.log('Cargada app') 

    // Variables

    let oDatos =  {
        userName: '',
        userPasswd: '',
        email: '',
        dni: '',
        cv: '',
        birthDate: '',
        info: ''  
    }

    let oDatosPretty =  {
        userName: 'Nombre de Usuario',
        userPasswd: 'Contraseña',
        email: 'Correo electrónico',
        dni: 'D.N.I.',
        cv: 'Formación',
        birthDate: 'Fecha de nacimiento',
        info: 'Más información'    
    }

    // Nodos del DOM
    let form = document.querySelector('[name="complete-post"]')
    let aFormData = document.querySelectorAll('.form_data')
    let dlgConfirm = document.querySelector('#dlg-confirm')
    let aDlgButtons = document.querySelectorAll('#dlg-confirm button')

    // Definir manejadores
    form.addEventListener('submit', onSubmit)
    aDlgButtons.forEach(btn => btn.addEventListener('click', onClickDlg))

    let aNodosValidables = nodosValidables()
    console.log('aNodosValidables', aNodosValidables)

    // Funciones manejadoras de eventos
    
    function onSubmit(ev) {
        ev.preventDefault()
        console.log(`Iniciando submit`)

        if (!validacionFinal(aNodosValidables)) {
            return
        }
        aFormData.forEach(item => oDatos[item.name] = item.value)
        renderModal()
    }

    function nodosValidables() {
        let aNodos = []
        aFormData.forEach(
            item => aNodos.push(item)
        )
        console.log(aNodos)
        return aNodos.filter(item =>  {
            if (item.nodeName === "PAPER-INPUT") {
                return !item.inputElement.children[0].checkValidity()
            } else if (item.nodeName === 'PAPER-TEXTAREA'){ // los paper-textarea
                return false
            }
        })
    }

    function onClickDlg(ev) {
        if(ev.target.textContent.toLowerCase() === 'si') {
            form.submit()
        }
        dlgConfirm.close() 
    }

    function renderModal() {
        let html = ''
        for (const key in oDatos) {
                const value = oDatos[key];
                if(key === 'userPasswd') {
                    html += `<li>${oDatosPretty[key]} --> *****</li>`
                } else if (key === 'isOk') {
                    html += `<li>${oDatosPretty[key]}</li>`
                } else {
                    html += `<li>${oDatosPretty[key]} --> ${value}</li>`    
                }
        }
        dlgConfirm.children[1].innerHTML = html
        dlgConfirm.showModal()
    }

 }