var arr = new Array();
function ProcesaR(){
    var tabla = document.getElementById("mitabla");
    var r = tabla.insertRow();
    var direcion = r.insertCell();
    var peticion = r.insertCell();

    direcion.innerHTML = document.getElementById("Direccion").value;
    peticion.innerHTML = document.getElementById("Peticion").value;

}
function getData(){
    var str = localStorage.getItem("localData");
    if(str != null){
    arr = JSON.parse(str);
    }
}
function addData(){
    getData();
    arr.push({
        direcion: document.getElementById("Direccion").value,
        peticion: document.getElementById("Peticion").value
    });
    localStorage.setItem("localData",JSON.stringify(arr));
    showData();
}
function showData(){
    getData();
    var tabla = document.getElementById("mitabla");
    var x = tabla.rows.length;
    while(--x){
        tabla.deleteRow(x);
    }

    for(i = 0; i < arr.length; i++){
        var r = tabla.inserRow();
        var direcion = r.insertCell();
        var peticion = r.insertCell();
    
        direcion.innerHTML =arr[i].Direccion;
        peticion.innerHTML =arr[i].Peticion;
    
    }

    var r = tabla.inserRow();
    var direcion = r.insertCell();
    var peticion = r.insertCell();

    direcion.innerHTML = document.getElementById("Direccion").value;
    peticion.innerHTML = document.getElementById("Peticion").value;

}