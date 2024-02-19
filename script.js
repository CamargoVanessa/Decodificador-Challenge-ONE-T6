let textInput = document.querySelector("#campo__input__texto");
let outInput = document.querySelector("#campo__resposta");

function criptografar() {
    let texto = textInput.value;

    let resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat");

    document.getElementById('campo__resposta').innerHTML = '<textarea readonly id="campo__output__texto" rows="8" cols="35">' + resultCripto + '</textarea>' + '<button class="botao__copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    let texto = textInput.value;

    let resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");

    document.getElementById('campo__resposta').innerHTML = '<textarea readonly id="campo__output__texto" rows="8" cols="35">' + resultDescripto + '</textarea>' + '<button class="botao__copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    let textoCop = document.getElementById("campo__output__texto").value;
    navigator.clipboard.writeText(textoCop);
    alert("Texto Copiado!");
}