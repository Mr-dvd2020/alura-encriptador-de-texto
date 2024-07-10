function encriptar(){
    let texto=document.getElementById("texto").value;
    let textoCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi, "ines")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    let tutuloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("dibujo");
    let mensaje = document.getElementById("mensaje")
    if(texto.length !=0){
        document.getElementById("texto").value=textoCifrado;
        document.getElementById("mensaje").value=textoCifrado
        tutuloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent= "";
        mensaje.style.display = "block";
        muneco.style.display = "none";
    }
    else{
        mensaje.style.display = "none";
        muneco.style.display = "block";
        tutuloMensaje.textContent = "Ningún Mensaje Encontrado";
        parrafo.textContent = "Ingresa el mensaje que deseas Encriptar o Desencriptar"; 
        alert("Debes Igresar algún texto");
    }
}

function desencriptar(){
    let texto =document.getElementById("texto").value;
    let tutuloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("dibujo");
    let mensaje = document.getElementById("mensaje")

    let textoCifrado = texto
    .replace(/enter/gi,"e")
    .replace(/ines/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "a");

    if(texto.length !=0){
        document.getElementById("texto").value=textoCifrado;
        tutuloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent= "";
        muneco.style.display = "none";
        mensaje.style.display = "block";
    }
    else{

        muneco.style.display = "block";
        mensaje.style.display = "none";
        tutuloMensaje.textContent = "Ningún Mensaje Encontrado";
        parrafo.textContent = "Ingresa el mensaje que deseas Encriptar o Desencriptar"; 
        alert("Debes Igresar algún texto");
    }
}

