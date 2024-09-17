# Gmail Tools

Generador de mensajes con diseño para Gmail, fácil y rápido, creado por JToolify.

## Uso de la Aplicación

1. **Selección de Plantilla**: Selecciona una plantilla desde el menú desplegable que se encuentra en la parte superior de la aplicación.
2. **Relleno del Formulario**: Llena los campos del formulario generado automáticamente basado en la plantilla seleccionada.
3. **Vista Previa del Mensaje**: Una vez completados los campos, haz clic en el botón "Vista previa" para generar el mensaje formateado. 

## Creación de Plantillas

### Estructura de `window.currentTemplate`

Para crear una plantilla, define un objeto en `window.currentTemplate` con dos propiedades: `configuracion` y `plantilla`.

**Ejemplo:**

```javascript
window.currentTemplate = {
  configuracion: [],
  plantilla: ``
};
```

### 1. `configuracion`

La propiedad `configuracion` es un arreglo de objetos que define los campos del formulario. Cada objeto debe tener:

- **nombre_variable**: Nombre interno del campo (usado en la plantilla). Ejemplo: `"nombre"`.
- **nombre_campo**: Nombre visible del campo en el formulario. Ejemplo: `"Nombre"`.
- **tipo**: Tipo de dato del campo. Ejemplo: `"texto"`, `"numero"`, `"fecha"`.
- **texto_ayuda** (opcional): Texto guía para el usuario. Ejemplo: `"Ingresa tu nombre completo"`.
- **texto_predeterminado** (opcional): Valor inicial en el campo. Ejemplo: `"Juan"`.
- **opciones** (opcional): Lista de opciones para `select` o `radio`. Ejemplo: `opciones: [{ valor: "valor 1", nombre: "nombre que se colocara en label" },`.
- **min**, **max**, **step** (opcional): Para campos de tipo `numero` o `rango`. Ejemplo: `min: 0`, `max: 100`, `step: 1`.

**Ejemplo:**

```javascript
// Configuración de la plantilla para probar todos los tipos de campos
  window.currentTemplate = {
    configuracion: [
      {
        nombre_variable: "nombre",
        nombre_campo: "Nombre",
        tipo: "texto",
        texto_ayuda: "Ingresa tu nombre completo"
      },
      {
        nombre_variable: "edad",
        nombre_campo: "Edad",
        tipo: "numero",
        texto_ayuda: "Ingresa tu edad"
      },
      {
        nombre_variable: "fecha_nacimiento",
        nombre_campo: "Fecha de Nacimiento",
        tipo: "fecha",
        texto_ayuda: "Selecciona tu fecha de nacimiento"
      },
      {
        nombre_variable: "fecha_hora",
        nombre_campo: "Fecha y Hora",
        tipo: "fecha-hora",
        texto_ayuda: "Selecciona una fecha y hora"
      },
      {
        nombre_variable: "mes",
        nombre_campo: "Mes",
        tipo: "mes",
        texto_ayuda: "Selecciona un mes"
      },
      {
        nombre_variable: "email",
        nombre_campo: "Correo Electrónico",
        tipo: "email",
        texto_ayuda: "Ingresa tu correo electrónico"
      },
      {
        nombre_variable: "rango",
        nombre_campo: "Rango",
        tipo: "rango",
        min: 0,
        max: 100,
        step: 1,
        texto_ayuda: "Selecciona un valor dentro del rango"
      },
      {
        nombre_variable: "color",
        nombre_campo: "Color Favorito",
        tipo: "color",
        texto_ayuda: "Selecciona tu color favorito"
      },
      {
        nombre_variable: "comentarios",
        nombre_campo: "Comentarios",
        tipo: "texto-area",
        cols: 30,
        rows: 10,
        texto_ayuda: "Escribe tus comentarios aquí"
      },
      {
        nombre_variable: "opcion",
        nombre_campo: "Opción",
        tipo: "selector-desplegable",
        opciones: [
          { valor: "opcion1", nombre: "Opción 1" },
          { valor: "opcion2", nombre: "Opción 2" },
          { valor: "opcion3", nombre: "Opción 3" }
        ]
      },
      {
        nombre_variable: "aceptar",
        nombre_campo: "Aceptar Términos",
        tipo: "selector-casilla",
        texto_ayuda: "Marca esta casilla si aceptas los términos"
      },
      {
        nombre_variable: "suscripcion",
        nombre_campo: "Suscripción",
        tipo: "selector-radio",
        opciones: [
          { valor: "disssssario", nombre: "Diario" },
          { valor: "semanal", nombre: "Semanal" },
          { valor: "mensual", nombre: "Mensual" }
        ]
      }
    ],
    plantilla: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p>Hola {nombre},</p>
        <p>Edad: {edad}</p>
        <p>Fecha de Nacimiento: {fecha_nacimiento}</p>
        <p>Fecha y Hora: {fecha_hora}</p>
        <p>Mes: {mes}</p>
        <p>Correo Electrónico: {email}</p>
        <p>Rango Seleccionado: {rango}</p>
        <p>Color Favorito: {color}</p>
        <p>Comentarios: {comentarios}</p>
        <p>Opción Seleccionada: {opcion}</p>
        {{#if aceptar}}
          <p>Gracias por aceptar los términos.</p>
        {{#endif}}
        {{#if suscripcion}}
          <p>Suscripción: {suscripcion}</p>
        {{#endif}}
      </div>
    `
  };
  
```

## 2. Plantilla

La propiedad `plantilla` contiene el HTML al cual se le insertaran los valores. Usa las variables de `configuracion` para insertar datos. Puedes usar lógica condicional para mostrar u ocultar contenido.

**Ejemplo de variables:**

```html
<p>Nombre: {nombre}</p>
<p>Edad: {edad}</p>
```
## Ejemplo de Condiciones

```html
{{#if edad}}
  <p>Edad ingresada: {edad}</p>
{{#endif}}
```

## Tipos de Datos Soportados

Estos son los tipos de datos que puedes usar en el formulario:

- **texto**: Campo para texto simple.
- **numero**: Campo para números, con opciones de rango.
- **fecha**: Campo para seleccionar una fecha.
- **fecha-hora**: Campo para seleccionar fecha y hora.
- **mes**: Campo para seleccionar un mes.
- **email**: Campo para ingresar direcciones de correo electrónico.
- **rango**: Campo para seleccionar un valor dentro de un rango.
- **color**: Selector de color.
- **texto-area**: Campo para texto largo (área de texto).
- **selector-desplegable**: Menú desplegable con opciones.
- **selector-casilla**: Casilla de verificación.
- **selector-radio**: Botones de opción (radio buttons).

## Uso de Condiciones

Las condiciones permiten mostrar u ocultar contenido basado en el estado de los campos del formulario.

**Ejemplo:**

Mostrar un mensaje si se acepta un término:

```html
{{#if aceptar}}
  <p>Gracias por aceptar los términos.</p>
{{#endif}}
```

## Mostrar Información Basada en la Selección de Suscripción

**Ejemplo:**

Mostrar información basada en la selección de suscripción:

```html
{{#if suscripcion}}
  <p>Suscripción: {suscripcion}</p>
{{#endif}}
```