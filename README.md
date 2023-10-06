# Practica3-Formulario-Respuestas

Este repositorio contiene respuestas a preguntas relacionadas con JavaScript, arreglos, almacenamiento del navegador, JSON, y el funcionamiento de scripts en una página web.

## Preguntas y Respuestas

### Explique los arreglos en JavaScript

Los arreglos en JavaScript son estructuras de datos versátiles que permiten almacenar una colección de elementos en una secuencia ordenada. Cada elemento en un arreglo se identifica mediante un índice numérico, comenzando desde 0 para el primer elemento. Los arreglos pueden contener datos de diferentes tipos y ofrecen una amplia gama de métodos y operaciones para trabajar con ellos. Algunas características clave de los arreglos en JavaScript incluyen:

- Declaración: Los arreglos pueden declararse utilizando corchetes `[]` o la palabra clave `Array`.
- Índices: Cada elemento en un arreglo se accede mediante un índice numérico único.
- Longitud: La propiedad `length` se utiliza para obtener la cantidad de elementos en un arreglo.
- Agregar y eliminar elementos: Se pueden agregar elementos al final con `push`, eliminar el último con `pop`, agregar al principio con `unshift`, y eliminar el primero con `shift`.
- Recorrer un arreglo: Los bucles `for` y el método `forEach` son comunes para recorrer elementos en un arreglo.
- Manipulación: Los elementos de un arreglo pueden modificarse asignándoles nuevos valores a través de índices.
- Métodos de arreglo: JavaScript ofrece una variedad de métodos incorporados, como `map`, `filter`, `reduce`, `slice`, `concat`, y otros, que facilitan la manipulación y transformación de datos en arreglos.
- Arreglos multidimensionales: Se pueden crear arreglos que contienen otros arreglos para representar estructuras de datos más complejas, como matrices o tablas.

### Explique el almacenamiento del navegador (sessionStorage y localStorage)

El almacenamiento del navegador proporciona dos mecanismos para almacenar datos en el lado del cliente: `sessionStorage` y `localStorage`. Ambos ofrecen ventajas y desventajas:

**sessionStorage:**

- Ventajas: Los datos están disponibles durante la sesión actual del navegador, lo que significa que se mantienen mientras el usuario navega por diferentes páginas o pestañas en el mismo sitio web. Es más seguro que `localStorage` debido a su alcance limitado.
- Desventajas: Los datos almacenados se eliminan automáticamente al cerrar la pestaña o el navegador. Tiene una capacidad de almacenamiento típicamente limitada, que varía de 5 a 10 MB.

**localStorage:**

- Ventajas: Los datos persisten incluso después de cerrar el navegador y volver a abrirlo. Ofrece una mayor capacidad de almacenamiento en comparación con `sessionStorage`.
- Desventajas: Los datos tienen un alcance global y son accesibles en todas las pestañas y ventanas del mismo dominio. Esto puede plantear problemas de seguridad si los datos son sensibles.

Ambos tipos de almacenamiento se pueden acceder y manipular en JavaScript mediante métodos simples, como `setItem`, `getItem`, `removeItem`, y `clear`. Estos métodos permiten almacenar, recuperar y eliminar datos de manera eficiente.

### ¿Qué es JSON?

JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y legible por humanos. Se utiliza para representar datos estructurados y es común en la comunicación entre sistemas y el almacenamiento de información. JSON se compone de pares clave-valor y es independiente del lenguaje, lo que lo hace ampliamente utilizado en aplicaciones web y APIs. Un ejemplo de objeto JSON es:

```json
{
  "nombre": "Ejemplo",
  "edad": 30
}
```

### ¿Qué hacen las funciones JSON.parse() y JSON.stringify()?

- `JSON.parse()`: Convierte una cadena JSON en un objeto JavaScript. Permite procesar datos JSON recibidos desde una fuente externa y trabajar con ellos en JavaScript. Por ejemplo, convierte `{"nombre": "Ejemplo", "edad": 30}` en un objeto JavaScript.

- `JSON.stringify()`: Convierte un objeto JavaScript en una cadena JSON. Útil para enviar datos estructurados a un servidor web o para almacenar datos complejos en el almacenamiento local del navegador. Por ejemplo, convierte un objeto JavaScript en `{"nombre": "Ejemplo", "edad": 30}`.

### ¿Cómo funciona window.location.href?

`window.location.href` es una propiedad que proporciona la URL completa de la página web actual en la que se ejecuta JavaScript. Puede utilizarse para obtener la URL actual o para redirigir al usuario a una nueva página web al asignarle una nueva URL. Por ejemplo, `window.location.href = "https://www.ejemplo.com"` redirigirá al usuario a "https
