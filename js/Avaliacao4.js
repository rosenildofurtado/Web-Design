var corpo = "<p>Esta página foi elaboara para a avaliação 4 de Web Design. Ela foi feita usando um scrip jQuary.<br>Professor, tenha piedade de mim. Olhe essa página com carirho.<br><img src=\"./Imagens/suplica.jpg\" alt=\"Imagen do gato pidão\"></p>"

$(document).ready(function(){
    $("body").html("<header></header");
    $("header").append("<p></p>");
    $("header p").append("<img src=\"./Imagens/ifrn.jpg\" alt=\"Logo do IFRN\">");
    $("header p").append("<span>Web Design</span>");
    $("header p span").attr("id","titulo");
    $("body").append("<div></div>");
    $("div").attr("class","menu");
    $("div").append("<ul><li>Início</li><li>Serviços</li><li>Contatos</li></ul>");
    $("body").append("<section></section>");
    $("section").append(corpo);
    $("section").attr("class","corpo");

    $("div").css({
        "width": "100%",
        "height": "40px",
        "background-color": "rgb(64, 64, 248)",
        "color": "white",
        "font-family": "Arial, Helvetica, sans-serif",
        "font-size": "24px",     
        "position": "relative",
        "margin-top": "-10px"
    });
    
    $("li").css({
        "font-family": "Arial, Helvetica, sans-serif",
        "font-size": "30px",
        "display": "inline",
        "margin-left": "240px",
        "margin-top": "20px"  
    });

    $("ul").css({
        "width": "100%",
        "height": "40px",
        "text-align": "center",
        
        "list-style-type": "none",
        "display": "inline",
        "margin": "10px, 30%, 0, 30%" 
    }); 

    $("#titulo").css({
        "position": "absolute",
        "margin-top": "30px",
        "left": "44%",
        "font-size": "50px",
        "font-weight": "bold",
        "padding":"10px",
        
    });

    $(".corpo").css({
        "margin": "50px",
        "text-align": "center",
        "font-family": "Arial, Helvetica, sans-serif",
        "font-size": "30px",
        "padding":"10px",
        
    });
});
