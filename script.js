//Seletores
const input = document.querySelector("#input-texto");
const mensagem = document.querySelector("#mensagem");
const btnCriptografar = document.querySelector("#btn-criptografar");
const btnDescriptografar = document.querySelector("#btn-descriptografar");
const btnCopiar = document.querySelector("#btn-copiar");

//captura o id e esconde a div-aparece da tela
document.getElementById("div-aparece").style.display = "none";
inputverificar();

// caputura o id no momento do click e direciona para o metódo que encripta o texto
document.getElementById("btn-criptografar").onclick = (e) => {
	e.preventDefault();
	const textoCriptografado = encriptar(input.value.toLowerCase());
	mensagem.value = textoCriptografado;
	input.value = "";
	aparece()
}

// caputura o id no momento do click e direciona para o metódo que descriptografa o texto
document.getElementById("btn-descriptografar").onclick = (e) => {
	e.preventDefault();
	const textoDescriptografado = decriptar(input.value);
	mensagem.value = textoDescriptografado;
	input.value = "";
	aparece()
}

// caputura o id no momento do click e faz a validação de copiar o texto
document.getElementById("btn-copiar").onclick = (e) => {
	e.preventDefault();
	const mensagem = document.querySelector("#mensagem");
	mensagem.select();
	navigator.clipboard.writeText(mensagem.value);
	mensagem.value = "";
}

//função que vai encriptar o texto
function encriptar(mensagemEncriptada) {
	let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
	mensagemEncriptada = mensagemEncriptada.toLowerCase();
	for (let i = 0; i < codigoMatriz.length; i++) {
		if (mensagemEncriptada.includes(codigoMatriz[i][0])) {
			mensagemEncriptada = mensagemEncriptada.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1]);
		}
	}
	return mensagemEncriptada
}

//função que vai desencriptar o texto
function decriptar(mensagemDescriptografada) {
	let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
	mensagemDescriptografada = mensagemDescriptografada.toLowerCase();
	for (let i = 0; i < codigoMatriz.length; i++) {
		if (mensagemDescriptografada.includes(codigoMatriz[i][1])) {
			mensagemDescriptografada = mensagemDescriptografada.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0]);
		}
	}
	return mensagemDescriptografada
}

//faz com que alguns componentes aparecer e desaparecer na tela
function aparece() {
	document.getElementById("div-desaparece").style.display = "none";
	document.getElementById("div-aparece").style.display = "block";
}

//faz com que alguns componentes apareçam e desapareçam da tela
function home() {
  document.getElementById("div-aparece").style.display = 'none';
  document.getElementById("div-desaparece").style.display = 'block';
}

//verifica qual foi o texto digitado pelo usuário
function inputverificar() {
  var inputPalavra = document.querySelector("#input-texto");
  inputPalavra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}
