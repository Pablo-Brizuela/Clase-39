window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    let campoTitulo = document.querySelector("input.claseName")

    if(campoTitulo.value == ""){
        alert("El campo de titulo tiene que estar completo")
    }

    let campoCalificacion = document.querySelector("input.claseCalif")
    if(campoCalificacion.value == ""){
        alert("El campo de calificación tiene que estar completo")
    }
})


}