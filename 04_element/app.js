import './banner-message.js'

class App {
    constructor () {
        this.btn = document.querySelector('button')
        this.banner = document.querySelector('banner-message')
        this.btn.addEventListener('click', this.btnOnClick.bind(this))
        this.banner.addEventListener('visible-changed', this.onVisibleBanner.bind(this))
    }

    btnOnClick(ev) {
        this.banner.visible = !this.banner.visible
    }

    onVisibleBanner(ev) {
        // handler del evento visible-changed notificado por el componente hijo
        console.log('Visibility changed: ', this.banner.visible)
    }

}



document.addEventListener('DOMContentLoaded', () => new App())