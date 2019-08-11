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

## 4. Scaffolding a Polymer Project ##

Polymer scaffolding options

- Create an element
- Create an application
- Use the starter kit

## 5. Polymer Data Binding ##

### Data binding overview ###

Each Polymer element manages its own data model.
The model is the elements properties, and data bindings provide a way to link
the data that is in the properties to the elements local dom structure.

The type of binding controls how the data flows from the markup to and from the model.

- One-way binding: [[]] -> from the model (properties) to the dom (markup)
- Two-way binding: {{}} -> from where the changes originates, in any direction

Polymer elements can define what are called computed properties,
and these are properties whose value is derived from some kind of calculation.

### One-way binding ###

    ```html
        <output id="out-temp">[[temperature]]</output>
    ```

Cualquier cambio en la propiedad temperature del modelo se refleja inmediatamente en el html

In the back, polymer is generating a setter for this property and then firing an event which then goes through the data system and updates the property in the layout.

### Two-way binding ###

    ```html
    <input type="range" value= {{temperature::change}}>
    ```

The control is acting as the source of the data change,
which pushes the new data into the model and
then that property change gets reflected back down in the html.

The input element is a native browser element.
So, we have to tell Polymer what event to listen to on this element in order to be notified that the data has changed. So to do that we need to decorate this data binding with two colons and then the name of the event that we want Polymer to listen to.

### Computed properties ###

In a propertie, attribute computed is going to refer to a function
that will be called in order to compute this property.

    ```js
        temp: Number,
        tempFahrenheit: {
            type: Number,
            computed: '_calcFahrenheit(temperature)' 
        },
    ```

When the temp property changes, it's going to trigger the one-way binding and because tempFahrenheit depends on the value of temp, it will also be updated and will trigger the other one-way binding up here in the layout.

### Bind to an attribute ###

To bind to an attribute, you need to use the dollar sign attribute in the name in the layout here and the reason for this is that Polymer will generate a call using the doms set attribute function when it sees a dollar sign on the attribute rather than doing a property assignment. And this also needs to be done for compatibility reasons on some browsers.
