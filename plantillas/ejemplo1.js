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
        { valor: "diario", nombre: "Diario" },
        { valor: "semanal", nombre: "Semanal" },
        { valor: "mensual", nombre: "Mensual" }
      ]
    }
  ],
  plantilla: `
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
      <tr>
        <td>
          <!-- Header -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4; border-bottom: 1px solid #ddd; padding: 20px;">
            <tr>
              <td align="center">
                <h2 style="color: #333; margin: 0;">Confirmación de Registro</h2>
              </td>
            </tr>
          </table>
          
          <!-- Contenido principal -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 20px;">
            <tr>
              <td>
                <p>Hola {nombre},</p>
                <p>Gracias por registrarte en nuestro sitio.</p>
                <p><strong>Edad:</strong> {edad}</p>
                <p><strong>Fecha de Nacimiento:</strong> {fecha_nacimiento}</p>
                <p><strong>Fecha y Hora:</strong> {fecha_hora}</p>
                <p><strong>Mes:</strong> {mes}</p>
                <p><strong>Correo Electrónico:</strong> {email}</p>
                <p><strong>Rango Seleccionado:</strong> {rango}</p>
                <p><strong>Color Favorito:</strong> {color}</p>
                <p><strong>Comentarios:</strong> {comentarios}</p>
                <p><strong>Opción Seleccionada:</strong> {opcion}</p>
                {{#if aceptar}}
                  <p>Gracias por aceptar los términos.</p>
                {{#endif}}
                {{#if suscripcion}}
                  <p><strong>Suscripción:</strong> {suscripcion}</p>
                {{#endif}}
              </td>
            </tr>
          </table>
          
          <!-- Footer -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4; border-top: 1px solid #ddd; padding: 20px; text-align: center; font-size: 14px; color: #666;">
            <tr>
              <td>
                <p style="margin: 0;">
                  Este mensaje puede contener información de tipo personal, clasificada o reservada. Si usted no es el destinatario, por favor, haga caso omiso de su contenido y absténgase de compartirlo. Si recibe este mensaje por error, por favor, informe al remitente y borre el mensaje de su cuenta.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `
};