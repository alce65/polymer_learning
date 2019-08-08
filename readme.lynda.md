# Curso Learning Polymer #

Linkedin (Lynda) - Joe Marini

Entorno:

- Terminal
- Node / npm
- Polymer CLI
- Bower

## 1. Overview of Polymer ##

Frameworks:

    - Encapsulation
    - Re-use

WebComponents: Standars

    - HTML Imports
    - HTML Templates
    - Custom Elements
    - ShadowDOM

Polymer

- Is not a framework
- Is an open-source library for using and creating web components
- Abstracts away much of the web components boilerplate
- Provides a set of polyfiles for all modern browsers
- Adds some data binding features

## 2. Using Polymer ##

Polymer CLI:

    - polymer init: element & application porjects
    - polymer install: dependencies (= bower / npm)
    - polimer serve

WebComponents in any Web application

    - Polyfils
    - WC to use from web catalog (webcomponents.org)
        e.g. paper-input / paper-button / paper-toast
        - install (bower / npm)
        - use: imports
    - Add the components to the page
    - Create component behavior for paper-toast with standard JS

## 3. Building a Web Component ##

Structure

- Imports
- Component Container -> dom-module
  - Structure -> template
    - Visual Apparence -> style
  - Behavior -> script

### Define component structure ###

    - templete
    - registro del componente
    - uso desde un index

### Define component appeareance ###

    - style
        :host{}
        :host([atributos])
    - variables con valores por defecto
    - modificación de las variables desde clases externas

### Define properties and behavior ###

Add logic to the components: data binding and events.
A propertie can have:

- Default value
- Data type
- Read-only status
- Reflection to an attribute on the HTML tag
- Change observer function
- Computed value

Se definen en el static getter properties

    - propiedad visible (Boolean)

En el método ready se asigna y crea el manejador de evento
que cambia el valor de la propiedad anterior.

### Use the finished component ###

En el index.html hay un botón que permite cambiar el estado 'visible' del componente

También hay un handler del evento visible-changed notificado por el componente hijo
