# GibliResuelve prueba frontend
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Principal problema y solucion

El principal problema que se resolvio lo divido en dos partes:

La parte técnica: Implementar el buscador de manera en autocopletado, se usa a traves de un componente de Angular Material el cual predeterminada la función.
La parte creativa: El ver la manera mas adecuada de distribución además de que fuera acorde a un diseño limpio y minimalista, se opto por el 
material design para que tuviera un diseño más sencillo.

## Que arquitectura se uso

Se uso el Framework Angular que es un simil de MVC donde tenemos una vista, componentes y un controlador que funge el ngmodel

## TradeOffs

El mas importante que no se implemento fue el uso de un framework ya que si en algun momento se desea crecer se pueda realizar una escalación mayor, además del tratamiento de web services con enfoque en la seguridad.

Por otro parte en el estilo a pesar de usar angular material se determino usar un custom CSS por lo cual los estilos son muy sencillos.

Si tuviera más tiempo:

Me enfocaria en primer lugar en mejorar el diseño para que tuviera una mejor experiencia de usaurio, principalmente en que tenda mejor vista en mobile.

Agregaria un sistema de excepciones para prever cualquier tipo de problema que pueda ocurrir en el desarrollo.

## Link a codigo

https://github.com/Egosman/gibli-resuelve/blob/master/src/app/home/home.component.ts

## Link a producción 

https://ghibli-estudio.herokuapp.com/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
