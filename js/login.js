/****************************************/
/*     Js: CRUD                         */
/*     Made by: Boris Gallego Ríos      */
/*     Versión 1.0                      */
/****************************************/

/*Chequea que se rellene correctamente el formulario */
function validacion(){
    let devolver=true;
    
    
    /*Comprueba que el valor del campo de correo electronico sea valido */
    let email=document.getElementById('exampleInputEmail1').value;
    if(email==""){
        
        document.getElementById('exampleInputEmail1').style.borderColor="red";
        document.getElementById('correoingresar').style.display="block";

        devolver=false;
    }else if(!validarCorreo(email)){
        document.getElementById('correoingresarcorrecto').style.display="block";
        devolver=false;

    }

    /*Comrpueba que el valor de contraseña exista */
    let password=document.getElementById('exampleInputPassword1').value;
    if(password==""){
        
        document.getElementById('exampleInputPassword1').style.borderColor="red";
        document.getElementById('passwordingresar').style.display="block";

        devolver=false;
    }else if(!validarcontrasena(password)){
        document.getElementById('exampleInputPassword1').style.borderColor="red";
        document.getElementById('validpassword').style.display="block";
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

/*Validar contraseña */
function validarcontrasena(cadena) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;
    return regex.test(cadena);
}
