# Aprendizaje de Polymer #

## 0. Introducción a Web Components ##

## 1. Introducción a Polymer ##

Instalación de polymer a nivel del proyecto:

```Shell
npm install @polymer/polymer
```

Ejemplos básicos

- Ejemplo similar a la implementación nativa de Web Components
- Ejemplo al estilo de Polymer 2

## 2.Uso de componentes del catálogo (webcomponents.org) ##

- Instalación con npm
        - paper-input : npm install @polymer/paper-input
        - paper-button: npm install @polymer/paper-button
        - paper-toast: npm install @polymer/paper-
        - iron-fit-behavior: npm install @polymer/iron-fit-behavior
        - iron-overlay-behavior: npm install @polymer/iron-overlay-behavior
  
- Imports para acceder a los componentes
- Incorporación a la página
- Creación del comportamiento del componente con JS estándar

Estos componentes se incorporan a un formulrio que utiliza mecanismos de validación y confirmación del envio programados con anterioridad al uso de componentes, para comprobar como se pueden incorporar estos en una aplicación "genérica".

## 3. Uso de polymer CLI ##

Instalación global:

```shell
npm install -g polymer-cli
```

Para utilizar el CLI en Windows 10, se activa un bash del subsystema de lynux, e.g. con la distribución de Ubunto para Windows, y se instala nvm y NodeJS

### Polymer 2 element ###

Aun utiliza Bower como gestor de dependencias

```shell
npm install -g bower
```

Se crea un compenente ejemplo, con dos propiedades que se usan en el template y que pueden ser inicializadas al "consumir" el componente.

### Polymer 3 element ###

Se crea un compenente ejemplo similar, con  propiedades que se usan en el template y que pueden ser inicializadas al "consumir" el componente.

Además se incorpora un elemento del catalogo, iron-collapse, y se le confiere funcionalidad utilizando los eventos de polymer. En el correspondiente controlador se utiliza el objeto evento.

## 4. Creación de elementos desde cero ##

Se aprovechan los snipets instalados en VSC que definen la estructura del componente y lo registran.

Se utiliza el componente desde un index

Se define la apariencia del componente usando los selectores

- :host{}
- :host([atributos])

Se utilizan variables con valores por defecto que pueden luego modificarse desde clases externas

Se define la propiedad visible (Boolean), para la cual existe una clase que hace visible el componente.

En el método ready se asigna y crea el manejador de evento
que cambia el valor de la propiedad anterior.

En el index.html hay un botón que permite cambiar el estado 'visible' del componente

También hay un handler del evento visible-changed notificado por el componente hijo.

## 5. Creación de una aplicación desde polymer cli ##

Desde polimer init es posible crear una app,
con un scaffoldig algo mas complejo que el de un elemnto:

- un fichero index que consume el componente
- un componente en la carpeta src
- un html con los tests del componente en la carpeta

### Componente lbr-autor ###

Presentador de los datos de un autor

- componentes del catálogo: iron-collapse, iron-icon, iron-icons
- respuesta a varios eventos click
- uso de propiedades computadas
- atributo class$ asociado a una variable

### Componente lbr-app ###

Controlador de una serie de autores,
utilizando de forma iterativa el componente anterior

- propiedad de tipo array
- característica reflectToAttribute en una propiedad
- template dom-repeat

## 6. Data binding ##

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
