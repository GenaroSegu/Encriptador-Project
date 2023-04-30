//Secure Cookies
document.cookie = "promo_shown=1; Max-Age=2600000; Secure";

//Texto a LowerCase
function min(e) {
    e.value = e.value.toLowerCase();
}

// Solo Letras y Espacio
document.getElementById("texto-codigo").addEventListener("keypress",verificar);
function verificar(e) {
    if(e.key.match(/[a-z\s]/i)===null) {
        // Si la tecla pulsada no es la correcta se elimina
        e.preventDefault();
    }
}

// BTN ENCRIPTAR
function encriptar(){
    let texto = document.getElementById("texto-codigo").value;
    texto = texto.toLowerCase();
    let textoCodificado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufar");

    if (document.getElementById("texto-codigo").value != 0){
        document.getElementById("mostrar-texto").textContent = "Encriptado Exitoso";
        document.getElementById("area-mensaje").textContent = textoCodificado;
    }
    else {     
        swal({
            title: "Alerta",
            text: "Debes ingresar un texto",
            icon: "warning",
        })
    }
}

//BTN DESENCRIPTAR
function desencriptar(){
    let texto = document.getElementById("area-mensaje").value;
    texto = texto.toLowerCase();
    let textoCodificado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufar/gi, "u");

    if (document.getElementById("texto-codigo").value != 0){
        document.getElementById("mostrar-texto").textContent = "Desencriptado Exitoso";
        document.getElementById("area-mensaje").textContent = textoCodificado;
    }
    else {
        swal({
            title: "Alerta",
            text: "Debes ingresar un texto",
            icon: "warning",
        })
    }
}

//BTN COPIAR
function copiar(){
    let textoCodificado = document.getElementById("area-mensaje").value;

    if(document.getElementById("area-mensaje").value != 0){
    navigator.clipboard.writeText(textoCodificado);
    document.getElementById("mostrar-texto").textContent = "Texto Copiado con Exito";
    }
    else{
        swal({
            title: "Alerta",
            text: "No hay texto para copiar",
            icon: "warning",
          })
    }
}