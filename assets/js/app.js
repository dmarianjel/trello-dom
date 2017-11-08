//cuando no utilizo una función con onclick y textarea
// otra opción con var
document.getElementById("initial").addEventListener("click",function(){
//crear input y darle atributos
var input= document.creatElement("input");//ingresaré tareas
input.setAttribute("type", "text");//será texto//
input.setAttribute("placeholder", "Nombre de la lista");
//y le doy clase a input para llamarlo en css
input.classList.add("class", "input_nameList"); //para poder llamaren css//
input.value;//obtengo valor ingresado por usuario//
//crear botón para guardar valor del input//
var new_btn= document.creatElements("button");//creo nodo elemento botton//
var text_btn= document.creatText("Guardar");//creo el nodo texto//
new_btn.setAttribute("type", "button");//le doy soplo de vida//
//new_btn.classList.addEventListener("class", "btn_guardar");//para llamar en css y le doy el event//
//var div_padre= document.getElementById("tareas");
boxes.appendChild(input);
new_btn.appendChild(text_btn);
div_padre.appendChild(nuevo_boton);
})

//new_btn.classList.addEventListener("class", "btn_guardar");//para llamar en css y le doy el event//