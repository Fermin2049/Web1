var nombre = document.datos.nombres;
    const validacion = new RegExp('^[A-Z]+$', 'i');
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("correo2").value;
    var contrasena = document.getElementById("contrasena");
    var datos = document.getElementsByName("datos");
    let emailVali = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function enviarFormulario(){
    

    if (nombres.value === null || nombres.value === "") {
        alert("Debe ingresar su nombre");
        nombre.focus();
        return false;
    }else if (!validacion.test(nombres.value)) {
        alert("El nombre no debe contener numeros");
        nombre.focus();
        return false;
    }

    if (apellidos.value === null || apellidos.value === "") {
        alert("Debe ingresar su apellidos");
        apellidos.focus();
        return false;
    }else if (!validacion.test(apellidos.value)) {
        alert("El apellido no debe contener numeros");
        apellidos.focus();
        return false;
    }

    if (correo2.value === null || correo2.value === "") {
        alert("Debe ingresar su correo");
        correo2.focus();
        return false;
    }

    // if (emailVali.test(correo.value)) {
    //     alert("El correo no es valido!!");correo.value === null || correo.value === "" && !
    //     correo.focus();
    //     return false;
    // }

    if (contrasena.value === null || contrasena.value === "") {
        
            alert("Su contrasena debe tener mas de 6 digitos");
            contrasena.focus();
            return false;
        }else if (contrasena.value.length < 6) {
            alert("Su contrasena debe tener mas de 6 digitos");
            contrasena.focus();
            return false;
        }
        
    
    alert("Confirmación");
        return true;
        //datos.reset();
}