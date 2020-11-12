$(document).ready(function(){     
    //Dès qu'on clique sur #hide, on applique hide() au paragraphe
    $("#hide").click(function(){
        $("p").hide(2000);
    });
    
    //Dès qu'on clique sur #show, on applique show() au paragraphe
    $("#show").click(function(){
        $("p").show(2000);
    });
});