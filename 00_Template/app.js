import tptInfo2 from './template.html.js'

function app() {
    console.log('app cargada')
    let tptInfo = document.querySelector('template#tpt-info')
    let sectInfo = document.querySelector('section#sect-info') 
    let btnInfo = document.querySelector('button#btn-info')
    let btnHide1 = null
    let btnHide2 = null
    btnInfo.addEventListener('click', onClickInfo) 
    
    function onClickInfo (ev) {
        // console.dir(tptInfo)
        // Create a new node, based on the template:
        // let clon1 = document.importNode(tptInfo, true);
        // let clon2 = tptInfo.cloneNode(true);
        // console.dir(clon1, clon2)            
        // Create a new node, 
        // based on the content of the template (document-fragment):
        let contentClon1 = tptInfo.content.cloneNode(true);
        let contentClon2 = tptInfo2.content.cloneNode(true);
        console.dir(contentClon1)
        console.dir(contentClon2)
        // document.body.appendChild(clon);
        sectInfo.prepend(contentClon2)
        sectInfo.prepend(contentClon1)
        //pParentNode.prepend(...nodesToPrepend);
        // parentNode.insertBefore(newNode, referenceNode);
        btnHide1 = document.querySelector('button#btn-hide')
        btnHide1.addEventListener('click', onClickHide)
        btnHide2 = document.querySelector('button#btn-hide2')
        btnHide2.addEventListener('click', onClickHide)

    }

    function onClickHide(ev) {
        console.log('Hide')
    }    
}

document.addEventListener('DOMContentLoaded', app)