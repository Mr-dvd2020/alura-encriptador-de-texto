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
    if(texto.value.length !=0){
        document.getElementById("texto").value=textoCifrado;
        tutuloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent= "";
        muneco.style.display = "none";
    }
    else{
        muneco.style.display = "block";
        tutuloMensaje.textContent = "Ningún Mensaje Encontrado";
        parrafo.textContent = "Ingresa el mensaje que deseas Encriptar o Desencriptar"; 
        alert("Debes Igresar algún texto");
    }
}

