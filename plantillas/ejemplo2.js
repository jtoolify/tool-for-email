window.currentTemplate = {
  configuracion: [
    {
      nombre_variable: "nombre",
      nombre_campo: "Nombre",
      tipo: "texto",
      texto_ayuda: "Ingresa tu nombre completo"
    },
    {
      nombre_variable: "email",
      nombre_campo: "Correo Electrónico",
      tipo: "email",
      texto_ayuda: "Ingresa tu correo electrónico"
    },
    {
      nombre_variable: "comentarios",
      nombre_campo: "Comentarios",
      tipo: "texto-area",
      cols: 30,
      rows: 10,
      texto_ayuda: "Escribe tus comentarios aquí"
    }
  ],
  plantilla: `
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
      <tr>
        <td>
          <!-- Header -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #e0e0e0; border-bottom: 1px solid #ddd; padding: 20px;">
            <tr>
              <td align="center">
                <h2 style="color: #0073e6; margin: 0;">Actualización de Información</h2>
              </td>
            </tr>
          </table>
          
          <!-- Contenido principal -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 20px;">
            <tr>
              <td>
                <p>Estimado {nombre},</p>
                <p>Hemos actualizado la información de tu perfil:</p>
                <p><strong>Correo Electrónico:</strong> {email}</p>
                 {{#if comentarios}}
                  <p><strong>Comentarios:</strong> {comentarios}</p>
                  {{#endif}}
               
              </td>
            </tr>
          </table>
          
          <!-- Footer -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #e0e0e0; border-top: 1px solid #ddd; padding: 20px; text-align: center; font-size: 14px; color: #666;">
            <tr>
              <td>
                <p style="margin: 0;">
                  Este mensaje contiene información importante sobre tu perfil. Si tienes alguna pregunta, no dudes en contactarnos. Gracias por tu atención.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `
};