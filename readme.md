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
