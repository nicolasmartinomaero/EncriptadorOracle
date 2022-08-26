/* 
a - ai
u - ufat
e - enter
i - imes
o - ober */

function encriptar(){
    var texto = document.getElementById("input1").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

     document.getElementById("muñeco").style.display = "none";
     document.getElementById("texto").style.display = "none";
     document.getElementById("texto2").innerHTML = txtCifrado;
     document.getElementById("copiar").style.display = "show";
     document.getElementById("copiar").style.display = "inherit";
     document.getElementById("texto2").innerHTML = txtcifrado;
     document.getElementById("texto").innerHTML = " ";
}

function desencriptar(){
    var texto = document.getElementById("input1").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

     document.getElementById("muñeco").style.display = "none";
     document.getElementById("texto").style.display = "none";
     document.getElementById("texto2").innerHTML = txtCifrado;
     document.getElementById("copiar").style.display = "show";
     document.getElementById("copiar").style.display = "inherit";
     document.getElementById("texto2").innerHTML = txtcifrado;
     document.getElementById("texto").innerHTML = " ";
     
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("Copiado!");
  }