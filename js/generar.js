const plantillasDisponibles = [
  {
    nombre: "Prueba Completa",
    ruta: "../plantillas/pruebaCompleta.js"
  },
  {
    nombre: "normal",
    ruta: "../plantillas/normal.js"
},
{
  nombre: "ejemplo 1",
  ruta: "../plantillas/ejemplo1.js"
},
{
  nombre: "ejemplo 2",
  ruta: "../plantillas/ejemplo2.js"
}
];

const tagSelect = document.getElementById("plantillaSelect")
const botonVistaPrevia = document.getElementById("botonVistaPrevia")
const botonSeleccionar = document.getElementById("botonSeleccionar")
const vistaPreviaContainer = document.getElementById("preview-container")
const previewModal = document.getElementById("previewModal")
const templateModal = document.getElementById("templateModal")
const formularioContainer = document.getElementById("formulario-container")
const botonVistaPreviaModal = document.getElementById("botonVistaPreviaModal")
const botonCopiar = document.getElementById("botonCopiar")



function cargarPlantillasDisponibles() {

  plantillasDisponibles.forEach((plantilla, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = plantilla.nombre;
    tagSelect.appendChild(option);
  });
}

window.onload = cargarPlantillasDisponibles;

function eliminarScriptAnterior() {
  const previousScript = document.querySelector('script[data-plantilla]');
  if (previousScript) previousScript.remove();
}


function cargarScript(src) {
  eliminarScriptAnterior();
  if (!src) {
    console.error("El src del script no esta definido.");
    return;
  }

  const scriptElement = document.createElement("script");
  scriptElement.setAttribute('data-plantilla', 'true');
  scriptElement.src = src;

  scriptElement.onload = () => {
    console.log("Script cargado correctamente.");
    if (window.currentTemplate?.configuracion && window.currentTemplate?.plantilla) {
      console.log("Script es correctamente.");
    } else {
      console.error('La configuración o plantilla no se cargaron correctamente.');
    }
  };

  scriptElement.onerror = () => {
    console.error('Error al cargar el script:', scriptElement.src || 'Contenido del script');
  };

  document.body.appendChild(scriptElement);

}

function habilitarBotones() {

  const isSelected = tagSelect.value !== "";
  let src = plantillasDisponibles[tagSelect.value]?.ruta || "";
  cargarScript(src)
  botonSeleccionar.disabled = !isSelected;
  botonVistaPrevia.disabled = !isSelected;
}

tagSelect.addEventListener("change", habilitarBotones)




function onBotonVistaPrevia() {
  vistaPreviaContainer.innerHTML = "";
  let previewHTML = window.currentTemplate.plantilla;

  window.currentTemplate.configuracion.forEach(campo => {
    const value = `{{${campo.nombre_variable}}}`;
    previewHTML = previewHTML.replace(`{${campo.nombre_variable}}`, value);
  });

  vistaPreviaContainer.innerHTML = previewHTML;
  openModal(previewModal);
}

botonVistaPrevia.addEventListener("click", onBotonVistaPrevia)


function generarFormulario() {

  formularioContainer.innerHTML = "";

  window.currentTemplate.configuracion.forEach(campo => {
    const formGroup = document.createElement("div");
    let formField;

    switch (campo.tipo) {
      case "texto":
        formField = document.createElement("input");
        formField.type = "text";
        break;

      case "numero":
        formField = document.createElement("input");
        formField.type = "number";
        break;

      case "fecha":
        formField = document.createElement("input");
        formField.type = "date";
        break;

      case "fecha-hora":
        formField = document.createElement("input");
        formField.type = "datetime-local";
        break;

      case "mes":
        formField = document.createElement("input");
        formField.type = "month";
        break;

      case "email":
        formField = document.createElement("input");
        formField.type = "email";
        break;

      case "rango":
        formField = document.createElement("input");
        formField.type = "range";
        formField.min = campo.min || 0;
        formField.max = campo.max || 100;
        formField.step = campo.step || 1;
        break;

      case "color":
        formField = document.createElement("input");
        formField.type = "color";
        break;

      case "texto-area":
        formField = document.createElement("textarea");
        formField.cols = campo.cols || 30;
        formField.rows = campo.rows || 10;
        break;

      case "selector-desplegable":
        formField = document.createElement("select");
        campo.opciones.forEach(opcion => {
          const optionElement = document.createElement("option");
          optionElement.value = opcion.valor;
          optionElement.text = opcion.nombre;
          formField.add(optionElement);
        });
        break;

      case "selector-casilla":
        formGroup.className = "form-group-casilla";
        formField = document.createElement("input");
        formField.type = "checkbox";
        break;

      case "selector-radio":
        formGroup.className = "form-group-radio";

        const radioContainer = document.createElement("div");
        campo.opciones.forEach((opcion, index) => {
          const radioWrapper = document.createElement("div");
          radioWrapper.className = "form-group-selector-radio";


          const radioInput = document.createElement("input");
          radioInput.type = "radio";
          radioInput.name = campo.nombre_variable;
          radioInput.value = opcion.valor;
          radioInput.id = `${campo.nombre_variable}_${index}`;

          const radioLabel = document.createElement("label");
          radioLabel.textContent = opcion.nombre;
          radioLabel.htmlFor = radioInput.id;

          radioWrapper.appendChild(radioLabel);
          radioWrapper.appendChild(radioInput);
          radioContainer.appendChild(radioWrapper);
        });

        formField = radioContainer;
        break;

      default:
        console.warn(`Tipo de campo no soportado: ${campo.tipo}`);
        return;
    }

    if (formField) {
      formField.name = campo.nombre_variable;
      formField.placeholder = campo.texto_ayuda || "";
      formField.value = campo.texto_predeterminado || "";

      const label = document.createElement("label");
      label.textContent = campo.nombre_campo || campo.nombre_variable;
      label.htmlFor = formField.name;

      formGroup.className = `form-group ${formGroup.className} `;

      formGroup.appendChild(label);
      formGroup.appendChild(formField);

      formularioContainer.appendChild(formGroup);
    }
  });
}



function onBotonSeleccionar() {
  generarFormulario();
  openModal(templateModal);
}


botonSeleccionar.addEventListener("click", onBotonSeleccionar)



function procesarCondicionales(templateHTML, variables) {
  const condicionalesRegex = /{{#if\s+(\w+)}}([\s\S]*?){{#endif}}/g;

  const result = templateHTML.replace(condicionalesRegex, (_, variable, contenido) => {
    const variableValor = (variables[variable] || "").trim();

    const mostrarContenido = variableValor !== "" && variableValor !== "false";

    return mostrarContenido ? contenido : '';
  });

  return result;
}


function generarVistaPrevia() {


  let previewHTML = window.currentTemplate?.plantilla || '';

  const variables = {};
  window.currentTemplate?.configuracion?.forEach(campo => {
    const inputs = formularioContainer.querySelectorAll(`[name="${campo.nombre_variable}"]`);

    if (inputs.length > 1 && inputs[0].type === "radio") {
      const selectedInput = Array.from(inputs).find(input => input.checked);
      variables[campo.nombre_variable] = selectedInput ? selectedInput.value : '';
    } else {
      const input = inputs[0];
      if (input) {
        if (input.type === "checkbox") {
          variables[campo.nombre_variable] = input.checked ? "true" : "false";
        } else {
          variables[campo.nombre_variable] = input.value;
        }
      } else {
        variables[campo.nombre_variable] = '';
      }
    }
  });

  previewHTML = procesarCondicionales(previewHTML, variables);

  Object.keys(variables).forEach(key => {
    previewHTML = previewHTML.replace(`{${key}}`, variables[key] || `{{${key}}}`);
  });

  return previewHTML;
}

function onBotonVistaPreviaModal() {
  let previewHTML = generarVistaPrevia()
  vistaPreviaContainer.innerHTML = previewHTML;
  openModal(previewModal);
}

botonVistaPreviaModal.addEventListener("click", onBotonVistaPreviaModal)





function onBotonCopiar() {
  let previewHTML = generarVistaPrevia()


  const divTemporal = document.createElement('div');
  divTemporal.innerHTML = previewHTML;
  document.body.appendChild(divTemporal);

  const range = document.createRange();
  range.selectNodeContents(divTemporal);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand("copy");
    alert("Contenido HTML copiado al portapapeles!");
  } catch (err) {
    alert("Error al copiar HTML: " + err);
  }

  selection.removeAllRanges();
  document.body.removeChild(divTemporal);
}

botonCopiar.addEventListener("click", onBotonCopiar)



function openModal(tag) {
  tag.style.display = "block";
}

function closeModal(tag) {
  tag.style.display = "none";
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
};

window.onkeydown = function(event) {
  if (event.key === "Escape") {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.style.display = "none";
    });
  }
};
