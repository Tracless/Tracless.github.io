$(document).ready(function() {
    $(".pseudo").hover(function(){
        $(this).addClass("pseudo2");
    },
    function(){
        $(this).removeClass("pseudo2");
        
    }
  );
    $(".contactbutton").hover(function(){
        $(this).addClass("contactbutton2");
        },
        function(){
            $(this).removeClass("contactbutton2");
           
    });
    
    $(".right2").click(function() {
        $(".contactpopup").toggleClass("contactpopuptoggle");
    });
});




    




