function noDisplay() {
  document.getElementById("result").style.display = "none";
}

function Display() {
  document.getElementById("result").style.display = "initial";
}

window.onload = function()
{
    noDisplay();

    var boton1 = document.getElementById("btnconfirm1");

    boton1.addEventListener("click", function(evento){       
      noDisplay();                                            
    });
}

function escogedia(){

    noDisplay();    
    
    var midia = document.getElementById("day").value;
    var dialog1 = document.getElementById('dialog1');

    switch(midia){

        case "lunes":

        document.getElementById("pagodia").innerHTML = "15";

        Display(); 

        break;

        case "martes":

        document.getElementById("pagodia").innerHTML = "15";

        Display(); 

        break;

        case "miercoles":

        document.getElementById("pagodia").innerHTML = "15";

        Display(); 

        break;

        case "jueves":

        document.getElementById("pagodia").innerHTML = "15";

        Display(); 

        break;

        case "viernes":


        document.getElementById("pagodia").innerHTML = "15";

        Display(); 

        break;

        case "sabado":

        document.getElementById("pagodia").innerHTML = "25";

        Display(); 

        break;

        case "domingo":

        document.getElementById("pagodia").innerHTML = "25";

        Display(); 

        break;

        default:

        dialog1.showModal();

        break;


    }


   } 