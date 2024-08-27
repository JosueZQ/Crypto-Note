function encriptar() {
    let textoIntroducido = document.getElementById("textoIntroducido").value;

    if (!validarTexto(textoIntroducido)) {
        alert("El texto contiene mayúsculas o caracteres especiales. Solo se permiten letras minúsculas y espacios.");
        return ""; 
    }
    
    if (textoIntroducido === "") {
        alert("Por favor, introduce un texto.");
        return;
    }

    let encriptarTexto = textoIntroducido
        .replace(/a/g, "ai")    
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("textoResultado").value = encriptarTexto;

    // Mostrar el botón de copiar    
    document.getElementById("botonCopiar").classList.add("mostrar");

        //Ocultar los valores iniciales
        mostrarOcultarContenidoInicial();

        ajustarAlturaContenedor();
}

function desencriptar(){
    let textoIntroducido = document.getElementById("textoIntroducido").value;

    if (!validarTexto(textoIntroducido)) {
        alert("El texto contiene mayúsculas o caracteres especiales. Solo se permiten letras minúsculas y espacios.");
        return ""; 
    }
    
    if (textoIntroducido === "") {
        alert("Por favor, introduce un texto.");
        return;
    }

    let desencriptarTexto = textoIntroducido
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("textoResultado").value = desencriptarTexto;

    // Mostrar el botón de copiar
    document.getElementById("botonCopiar").classList.add("mostrar");

        //Ocultar los valores iniciales
        mostrarOcultarContenidoInicial();

        ajustarAlturaContenedor();
}

function validarTexto(texto) {
    let regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function copiarTexto() {
    let textoResultado = document.getElementById("textoResultado");
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}

//mostrar el resultado y ocultar los valores iniciales
document.getElementById('textoResultado').addEventListener('input', function() {
    mostrarOcultarContenidoInicial();
});

function mostrarOcultarContenidoInicial() {
    var contenidoInicial = document.querySelector('.contenido_textoresultado_contenidoInicial');
    var textoResultado = document.getElementById('textoResultado').value.trim();

    if (textoResultado) {
        contenidoInicial.style.opacity = '0';
        setTimeout(function() {
            contenidoInicial.style.display = 'none';
        }, 300); // Espera a que la transición termine antes de ocultar el elemento
        
        // Mostrar el área de resultado con transición
        document.getElementById('textoResultado').style.opacity = '1';
    } else {
        contenidoInicial.style.display = 'flex';
    }
}


// Al cargar la página, aplicar el tema guardado en localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tema') === 'obscuro') {
        document.body.classList.add('tema-obscuro');
    }
});

// Función para aplicar el tema claro
function temaClaro() {
    document.body.classList.remove('tema-obscuro');
    localStorage.setItem('tema', 'claro');
}

// Función para aplicar el tema obscuro
function temaObscuro() {
    document.body.classList.add('tema-obscuro');
    localStorage.setItem('tema', 'obscuro');
}

// Función para verificar el texto y ajustar el tamaño del contenedor
function ajustarAlturaContenedor() {
    let textoResultado = document.getElementById("textoResultado").value.trim();
    let contenedorResultado = document.querySelector(".contenido_textoresultado");

    if (textoResultado) {
        contenedorResultado.classList.add("expandido");
    } else {
        contenedorResultado.classList.remove("expandido");
    }
}

// Llama a la función cuando se carga la página para volver al stado original
ajustarAlturaContenedor();
