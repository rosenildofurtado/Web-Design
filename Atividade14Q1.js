function abrirJanela(){
    open("http://www.treinaweb.com.br");
}

var pergunta = confirm("Você está gostando do curso?");
if(pergunta == true){
    alert("Ficamos imensamente felizes que você esteja gostando!");
}else{
    alert("Poxa! Em que podemos melhorar?");
}