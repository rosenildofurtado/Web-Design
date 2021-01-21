$(document).ready(function(){
    $("body").html("<header></header");
    $("header").append("<img src=\"./Imagens/ifrn.jpg\" alt=\"Logo do IFRN\">");
    $("header").append("<h1>Web Design</h1>");
    $("body").append("<ul><li>Início</li><li>Serviços</li><li>Contatos</li></ul>");
    
    $("body").append("<p>Atividade 16</p>");
    $("body").append("<p>Será que vai dá certo</p>");
    $("body").append("<ul><li>item1</li><li>item2</li><li>item3</li></ul>");
    
    $("p").attr("class","parag");
    $(".parag").css({
        "font-size": "20px",
        "background":"lightblue",
        "padding":"9px"
    });
    $("li").css({
        "font-size": "30px",
        "color":"red"        
    });
});
