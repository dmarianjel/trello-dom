
function first_container(){
	var boxes=document.getElementById('boxes');//llamo al div en html que contiene los elementos
	var second_btn= document.createElement('button');//creo botón
	var input=document.createElement('input');//creo input
	var nodoText=document.createTextNode('Guardar');//creo texto que irá en el botón
//atributos
input.setAttribute('id', 'inpt');//doy atributos a input()
//nodos
second_btn.appendChild(nodoText);//indico parentesco de nodo texto
boxes.appendChild(second_btn);//indico second_btn es hijo de boxes
boxes.appendChild(input);//input también es hijo de boxes

second_btn.addEventListener('click', function(){//guardar lo escrito en input al activar evento click
	var text=document.getElementById('second_btn');// lo que ingresaré en input
	document.getElementById('inpt').value="";//limpiame ese lugar para colocar el valor
	var works= document.getElementById('works');//será el padre de textNew
	var paragraph=document.createElement('p');//creo un parrafo(indico tipo de elemento texto)
	var textNew=document.createTextNode(' ');//será el valor de input
	
	var add= document.createElement('a');// nuevo elemento al hacer click generará un nuevo textarea
	add.setAttribute('href', '#');//doy a tributos a anchord
	var textAdd= document.createTextNode("añadir tarjeta");
	
	paragraph.appendChild(textNew);//será padre de textNew
	works.appendChild(paragraph);//será padre de paragraph y parentela
	add.appendChild(textAdd);//será padre de textAdd
	works.appendChild(add);//será padre de add
	
	add.addEventListener('click',function(){
		var textArea=document.createElement('textArea');//creo un nuevo elemento de texto
		var add_second=document.createElement('a');
		add_second.setAttribute('href', '#');//doy atributos al nuevo anchord
		works.appendChild(textArea);//señalo parentesco, works es su padre
		works.appendChild(add_second);//works será padre de add_second

		})
	})
}
















/*//cuando no utilizo una función con onclick y textarea
// otra opción con var
var box_first=document.getElementById("boxes");
var first_btn=document.getElementById("initial");
first_btn.addEventListener("click",function(){
//crear input y darle atributos
var input= document.creatElement("box_btn");//ingresaré tareas
input.setAttribute("type", "btn");//será texto//
input.setAttribute("placeholder", "Nombre de la lista");//texto descriptivo
//y le doy clase a input para llamarlo en css
input.classList.add("class", "input_nameList"); //para poder llamaren css//
input.value;//obtengo valor ingresado por usuario//
//crear botón para guardar valor del input//
var new_btn= document.creatElements("button");//creo nodo elemento botton//
var text_btn= document.creatText("Guardar");//creo el nodo texto//
new_btn.setAttribute("type", "button");//le doy rol al nodo
//new_btn.classList.addEventListener("class", "btn_guardar");//para llamar en css y le doy el event//
var div_padre= document.getElementById("works");
boxes.appendChild(input);
boxes.appendChild(initial)
new_btn.appendChild(text_btn);
div_padre.appendChild(new_btn);
})

//new_btn.classList.addEventListener("class", "btn_guardar");//para llamar en css y le doy el event//*/
