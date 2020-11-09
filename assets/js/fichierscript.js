$(document).ready(function(){     
    //Dès qu'on clique sur #b1, on applique le hide/Masquer () au titre
    $("#hide").click(function(){
        $("#texte").hide();
    });
    
    //Dès qu'on clique sur #b1, on applique le show/Afficher () au titre
    $("#show").click(function(){
        $("#texte").show();
    });
});