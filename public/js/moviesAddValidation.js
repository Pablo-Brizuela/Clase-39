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

    let campoTitulo = document.querySelector("#title")
    let campoReiting = document.querySelector("#rating")
    let premios = document.querySelector("#awards")
    let fecha = document.querySelector("#release_date")
    let duracion = document.querySelector("#length")
    let genero = document.querySelector("#genre_id")

    campoTitulo.addEventListener("focus", ()=>{
            console.log(1)
     })

     let errores = []

    if(campoTitulo.value == ""){
       errores.push("El campo Titulo tiene estar lleno")
        /* campoTitulo.classList.add("is-invalid") */
       }
       
     /* if(errores.length > 0){
        e.preventDefault()
     } */
     
     
    if(campoReiting.value == ""){
        alert("El campo de calificación tiene que estar completo")
    }

    if(premios.value == ""){
        alert("El campo de premios tiene que estar completo")
    }

    if(fecha.value == ""){
        alert("El campo de fecha tiene que estar completo")
    }

    if(duracion.value == ""){
        alert("El campo de duración tiene que estar completo")
    }

    if(genero.value == ""){
        alert("El campo de genero tiene que estar completo")
    }

})


}