miStorage = window.localStorage;
var Usuario = miStorage.getItem('Nombre');
if(Usuario == "null"){
    alert("Debe iniciar sección primero");
    window.location = '../index.html';
}