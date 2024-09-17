window.currentTemplate = {
  configuracion: [
    {
      nombre_variable: "contenido",
      nombre_campo: "Contenido",
      tipo: "texto-area",
      texto_predeterminado: "",
      texto_ayuda: "Ingresa el contenido aquí",
      cols: 80, // Ajusta el tamaño del textarea
      rows: 10
    }
  ],
  plantilla: `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;">
  <tr>
    <td>
      <!-- Header -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff; border-bottom: 1px solid #ddd; padding: 20px;">
        <tr>
          <td align="center">
            <h2 style="color: #febe3a; margin: 0;">Jtoolify</h2>
          </td>
        </tr>
      </table>
      
      <!-- Contenido principal -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 20px;">
        <tr>
          <td>
            <div>{contenido}</div>
          </td>
        </tr>
      </table>
      
      <!-- Footer -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff; border-top: 1px solid #ddd; padding: 20px; text-align: center; font-size: 14px; color: #666;">
        <tr>
          <td>
            <p style="margin: 0;">
              Este mensaje puede contener información de tipo personal, clasificada o reservada, no susceptible de ser distribuida. 
              Si usted no es el destinatario, por favor, haga caso omiso de su contenido y absténgase de compartirlo, reenviarlo o copiarlo. 
              Si recibe este mensaje por error, agradecemos informarlo inmediatamente al remitente y borrarlo permanentemente de su cuenta.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
  
  `
};