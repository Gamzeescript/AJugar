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
    var boton2 = document.getElementById("btnconfirm2");
    var boton3 = document.getElementById("btnconfirm3");

    boton1.addEventListener("click", function(evento){       
        Display();                                            
    });

    boton2.addEventListener("click", function(evento){       
        Display();                                            
    });

    boton3.addEventListener("click", function(evento){       
        Display();                                            
    });
}

function impuesto(){

    noDisplay();

    var sueldo = document.getElementById("sueldo").value;
    var dialog1 = document.getElementById('dialog1');
    var dialog2 = document.getElementById('dialog2');
    var dialog3 = document.getElementById('dialog3');
    var paga = parseFloat(sueldo);

    if((paga >= 0) && (paga <= 200)){

        var sueldon = paga * 0.05;
        var sueldoneto = paga - sueldon;
        dialog1.showModal();
        document.getElementById("sueldo_neto").innerHTML = paga;
        document.getElementById("imp").innerHTML = sueldon;
        document.getElementById("sueldo_final").innerHTML = sueldoneto;
    }
    
    else if((paga >= 200) && (paga <= 1000)){

        var sueldon = paga * 0.10;
        var sueldoneto = paga - sueldon;
        dialog2.showModal();
        document.getElementById("sueldo_neto").innerHTML = paga;
        document.getElementById("imp").innerHTML = sueldon;
        document.getElementById("sueldo_final").innerHTML = sueldoneto;

    } 
        
    else if((paga >= 1000) && (paga <= 6000)){

        var sueldon = paga * 0.15;
        var sueldoneto = paga - sueldon;
        dialog3.showModal();
        document.getElementById("sueldo_neto").innerHTML = paga;
        document.getElementById("imp").innerHTML = sueldon;
        document.getElementById("sueldo_final").innerHTML = sueldoneto;

    }

}