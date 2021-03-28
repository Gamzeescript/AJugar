window.onload = function()
{
    var boton1 = document.getElementById("btn1");
    var boton2 = document.getElementById("btn2");
    
    boton1.addEventListener("click", function(evento){       
        location.href = 'op1.html';                                      
    });
    
    boton2.addEventListener("click", function(evento){       
        location.href = 'op2.html';                                      
    });
}