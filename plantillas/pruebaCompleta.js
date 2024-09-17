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
  