function getSaudacao() {
	var data = new Date();
	tempo = data.getHours();

	if (tempo < 12) {
		mensagem = "Bom diaa!! ";
	} else {
		mensagem = "Boa tarde! "
	}
	return mensagem;
}


function mostraMensagem() {
    var nome = document.getElementById("entradaNome").value;
    var saudacao = getSaudacao() + nome;
    windows.alert(saudacao);
}