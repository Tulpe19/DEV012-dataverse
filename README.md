# Simpsons lovers

## Índice

- [1. Resumen del proyecto](#1-resumen-del-proyecto)
- [2. Proceso de diseño](#2-proceso-de-diseño)
- [3. Funcionalidades](#3-funcionalidades)
- [4. Cómo leer el proyecto](#4-cómo-leer-el-proyecto)
- [5. Problema de usabilidad](#5-problema-de-usabilidad)

---

## 1. Resumen del proyecto

Simpsons lovers una página web interactiva para escritorio y móvil, que permite a los usuarios visualizar y explorar un conjunto de datos sobre los personajes de la serie. Los datos se generarán mediante el uso de la herramienta de inteligencia artificial llamado ChatGPT.
El objetivo principal de este proyecto es el conocimiento en la manipulación de datos, se busca permitir a los usuarios filtrar, ordenar y realizar cálculos estadísticos sobre los datos para obtener información relevante sobre los personajes.

## 2. Proceso de diseño

## 3. Funcionalidades

## 4. Cómo leer el proyecto

Este proyecto sigue una estructura organizada para facilitar el desarrollo y mantenimiento del código. A continuación, se describe el contenido de los archivos principales:

  ### src/index.html:
  
  Este archivo representa la página que se mostrará a los usuarios. Además, se utiliza para importar y vincular todos los scripts necesarios para el proyecto.

  ### src/main.js:

  En este archivo, se recomienda colocar todo el código relacionado con la interacción con el Document Object Model (DOM). Esto incluye la creación de nodos HTML, registro de manejadores de eventos (event listeners o event handlers) y cualquier lógica que afecte la visualización de datos en la pantalla.

  ### src/dataFunctions.js:

  Contiene todas las funciones puras que se encargan de obtener, procesar y manipular datos. Algunos ejemplos de funciones incluyen:
    * filterData(data, filterBy, value): para filtrar datos según ciertos criterios.
    * sortData(data, sortBy, sortOrder): para ordenar datos dependiendo de una condición.
    * computeStats(data): para realizar cálculos estadísticos básicos.

  ### src/data:

  Almacena la data que se usa para la página.

  ### test/dataFunctions.spec.js:

  En este archivo, se encuentran las pruebas unitarias para las funciones implementadas en dataFunctions.js.

  ### test/data.js:

  Permite almacenar una pequeña data que se utiliza en las pruebas. 
  
  ### src/view.js:

  Este archivo se encarga de manejar la renderización de elementos de manera dinámica en la página web.

## 5. Problema de usabilidad

