---
id: '4'
slug: 'introduccion-a-react'
title: 'Introducción a React'
description: 'Descubre los fundamentos de la librería más popular para construir interfaces de usuario.'
date: '2024-01-25'
author: 'React Enthusiast'
tags:
  - 'React'
  - 'Frontend'
  - 'JavaScript'
  - 'Librerías'
---

React es una librería de JavaScript para construir interfaces de usuario interactivas. Desarrollada por Facebook, se ha convertido en una de las herramientas más utilizadas en el desarrollo frontend.

## ¿Qué hace a React tan popular?

*   **Componentes:** Permite construir UIs complejas a partir de pequeñas piezas de código reutilizables.
*   **Virtual DOM:** Optimiza el rendimiento al actualizar solo las partes de la UI que han cambiado.
*   **Declarativo:** Describe cómo debe verse la UI en cualquier estado, y React se encarga de actualizarla.

## Tu primer componente React

Un componente básico en React se ve así:

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>¡Hola, {props.name}!</h1>;
}

export default Welcome;
```

¡Empieza a construir interfaces increíbles con React!
