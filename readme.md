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

