/****************************************/
/*     Js: CRUD                         */
/*     Made by: Boris Gallego Ríos      */
/*     Versión 1.0                      */
/****************************************/

/*Chequea que se rellene correctamente el formulario */
function validacion(){
    let devolver=true;
    
    
    /*Comprueba el contenido del email y que este sea correcto y muestra los mensajes de error*/
    let email=document.getElementById('exampleInputEmail1').value;
    if(email==""){
        
        document.getElementById('exampleInputEmail1').style.borderColor="red";
        document.getElementById('correoingresar').style.display="block";

        devolver=false;
    }else if(!validarCorreo(email)){
        document.getElementById('correoingresarcorrecto').style.display="block";
        devolver=false;

    }
    /*Comprueba el contenido del nombre y muestra los mensajes de error */
    let nombre=document.getElementById('nombre').value;
    if(nombre==""){
        
        document.getElementById('nombre').style.borderColor="red";
        document.getElementById('introducirnombre').style.display="block";

        devolver=false;
    }
    /*Comprueba el contenido del apellidos y muestra los mensajes de error */
    let apellidos=document.getElementById('apellidos').value;
    if(apellidos==""){
        
        document.getElementById('apellidos').style.borderColor="red";
        document.getElementById('introducirapellidos').style.display="block";

        devolver=false;
    }
    /*Comprueba el contenido del edad, que sea mayor de edad y muestra los mensajes de error */
    let edad=document.getElementById('edad').value;
    if(edad<18){
        document.getElementById('edad').style.borderColor="red";
        document.getElementById('edadreal').style.display="block";

        devolver=false;
    }

    /*Comprueba que se haya elegido entre hombre o mujer y muestra los mensajes de error */
    let hombre=document.getElementById('hombre').checked;
    let mujer=document.getElementById('mujer').checked;
    if(!mujer && !hombre){
        document.getElementById('mensajesexo').style.display="block";
        devolver=false;
    }

    /*Comprueba el departamento elegido y muestra los mensajes de error */
    let select=document.getElementById('dep').value;
    if(select==0){
        document.getElementById('departamento').style.display="block";
        devolver=false;
    }

    return devolver;
}

/*Elimina los  mensajes de error al escribir en las casilla */
function eliminarerror1(id1,id2){
    document.getElementById(id1).style.display= "none";
    document.getElementById(id2).style.borderColor="lightgray"
}

/*Elimina los 2 mensajes de error al escribir en la casilla del correo */
function eliminarerror2(id1,id2,id3){
    document.getElementById(id2).style.display= "none";
    document.getElementById(id3).style.display= "none";
    document.getElementById(id1).style.borderColor="lightgray"
}

/*Si se le da a que no aceptas las condiciones, se deschequea la casilla */
function deseleccionarCheckbox(){
    document.getElementById("exampleCheck1").checked = false;
}

/*esta funcion la busque por internet*/
function validarCorreo(email) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
    return regexCorreo.test(email);
}

