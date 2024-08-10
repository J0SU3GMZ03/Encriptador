let titulo = document.getElementById("titulo");
let parrafo = document.getElementById("parrafo");
let img = document.getElementById("Muñeco");
let boton = document.getElementById("Boton_Copiar")
let Grupo2 = document.getElementById("Grupo2")
let texto2 = document.getElementById("texto2")

function encriptar() {
    let texto = document.getElementById("texto").value;

    let texto_cifrado = texto
    .replace (/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if( document.getElementById("texto").value.length !=0) {
        document.getElementById("texto2").textContent = texto_cifrado;
        img.style.display = "none";
        boton.style.display = "inline";
        parrafo.style.display = "none";
        Grupo2.style.justifyContent = "space-between";
        texto2.style.height = "70%";
        texto2.style.width = "100%";
        texto2.style.textAlign ="left";
        texto2.style.fontWeight = "lighter";
        texto2.style.outline = "none"

    } else {
        document.getElementById("Muñeco").src = "./img/Muñeco.png";
        alert("Debes ingresar un parrafo");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;

    let texto_cifrado = texto
    .replace (/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u"); 

    if( document.getElementById("texto").value.length !=0) {
        document.getElementById("texto2").textContent = texto_cifrado;
        img.style.display = "none";
        boton.style.display = "inline";
        parrafo.style.display = "none";
        Grupo2.style.justifyContent = "space-between";
        texto2.style.height = "70%";
        texto2.style.width = "100%";
        texto2.style.textAlign ="left";
        texto2.style.fontWeight = "lighter";

    } else {
        document.getElementById("Muñeco").src = "./img/Muñeco.png";
        alert("Debes ingresar un parrafo");
    }

}

function copiar() {
    let texto = texto2;
    texto.select();
    document.execCommand("copy")
    alert("Texto copiado");

}