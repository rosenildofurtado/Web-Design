
function valida(){
    var usuario = document.forms[0].usuario.value;
    var senha = document.forms[0].senha.value;
  
    if(usuario=="" || senha==""){
        alert("você não preencheu um dos campos.");
    }
    else if(usuario=="usuario" && senha=="senha"){
        alert("Seja bem vindo");
    }
    else{
        alert("O usuário ou a senha não correspondem");
    }
}
