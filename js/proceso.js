miStorage = window.localStorage; //Crear variable del localStorage.

var Correcto = ""; //Variable global que guarda "Nombre" y "Apellido"
var cont = 1; //Contar como aux cuando se introduce un usuario y contraseña que no esten registrados.

function procesar(){
    var user = document.getElementById("txtusuario").value; //tomar los valores de los inputs del login.
    var pass = document.getElementById("txtcontraseña").value;

 //Validar que tanto como el usuario y contraseña, sean iguales a los que se estan introduciendo.

    if(user.length == 0 && pass.length == 0){

        alert("Debe llenar todos los campos")

    }else if(user.length == 0){

        alert("No puede dejar vacio el usuario")

    }else if(pass.length == 0){

        alert("No puede dejar vacio la contraseña")
    
        
    }else if(user.length < 4){
        alert("El usuario debe contener minimo 4 caracteres")
        
    }else{
        fetch('./js/datos.json') //Cuando todo este correcto, cargar el json con los usuarios.
        .then(function(res){
            return res.json();
        })
        .then(function(datos){
            datos.forEach(function(jason) { //Variable "jason" conecta el "Nombre" y "Apellido" para guardar ambos dentro de "Correcto"
                if(jason.usuario == user){
                    if(jason.contrasena == pass){
                        alert("Bienvenido "+jason.Nombre+" "+jason.Apellido);
                        Correcto = (jason.Nombre)+" "+(jason.Apellido);
                        cont = 2;
                        localStorage.setItem("Nombre",Correcto); //Se toma lo que está en el nombre.
                        window.location = './html/ingreso.html'; //Redirecciona a la página principal.
                    }else{
                        alert("Contraseña incorrecta");
                        cont = 2;
                    }
                }
            });
            if(cont == 1){ //En caso que se esté introduciendo algun usuario o contraseña que no esten en el json.
                alert("El usuario que esta ingresando, no está registrado");
            }
        })
        .catch(function(error){ //Error al cargar el Fetch
            alert(error)
        })
    } 
}
function nombre(){ //Cargar la variable usuario, que toma "Nombre", donde están el nombre y apellido.

var usuario = miStorage.getItem('Nombre'); //Se toma del localStorage "Nombre"
document.getElementById('info').innerHTML='<b>Bienvenido '+usuario+'</b>'; //Mostrarlo dentro de las páginas que tengan el id "info"
}

function cerrarSesion(){
    if(window.confirm("¿Desea cerrar sección?")){ //Preguntando si desea serrar sección.
//En caso que sí, mandar un mensaje de alerta diciendo que saldrá de la página, borrar el "Nombre" del LocalStorage y rediccionar al index.
        alert("Esta saliendo de la página");
        miStorage.setItem('Nombre',"null");
        window.location='../index.html';      
    }else{ //En caso que oprima cancelar, mandar un mensaje para que el usuario siga navegando en la página.
        window.alert("Tomase su tiempo.")
    }
  
}