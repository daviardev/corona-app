
var divtabla=document.getElementById('cuadro')// cuadro dentro de la tabla
var i=1;//contadora
var botonenviar=document.getElementById('btnagregar')
var botoneditar=document.getElementById('btneditar')
botoneditar.disabled = true;//no habilitado editar


var infoForm={}; //variabkle tipo

function ProcesaR() { //calcula y agrega a la fila de la tabla
var Llave_foranea;
var Llave_primaria;
var Direccion=document.getElementById('Direccion').value
var Peticion=document.getElementById('Peticion').value

///validacion de campos requeridos
if(Direccion=="" || Peticion==""){
    alert("debe ingresar la informacion en todos los campos")
}else if(window.confirm("¿Deséa enviar su solicitud?")){
    nube = window.localStorage;
    var datoss = JSON.parse(nube.getItem("Datos")) || [];
    datoss.push({id: i, Llave_primaria, Direccion, Llave_foranea, Peticion});

    per = JSON.stringify(datoss);
    nube.setItem('Datos',per);
    alert("Registro guardado");


//////////////////  cambio de formato

    infoForm ["id"]= i++;
    infoForm ["Direccion"]= Direccion;
    infoForm ["Peticion"]= Peticion;
////////////////

/////////////// insertar a la tabla
var tabla = document.getElementById("mitabla");
    var nuevaFila = tabla.insertRow(tabla.lenght);

    cell1 = nuevaFila.insertCell(0);
    cell1.innerHTML = infoForm.id;

    cell2 = nuevaFila.insertCell(1);
    cell2.innerHTML = infoForm.Direccion;

    cell3 = nuevaFila.insertCell(2);
    cell3.innerHTML = infoForm.Peticion;

    cell4 = nuevaFila.insertCell(3);
    cell4.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Editar</a>
    <a class= "btn btn-danger " onClick="onDelete(this)">Eliminar</a>`;
//////////////


 ///limpia el formilario
 document.getElementById("miForm").reset();
 divtabla.style.display='';
///muestra la yabla ya que por lo menos se tiene un registro
}else{
    alert("Tómese su tiempo");
}

}///fin de procesar



//////editar
function onEdit(td){
    ///cambio de botones
    botoneditar.disabled = false;
    botonenviar.disabled = true;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Direccion").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Peticion").value = selectedRow.cells[2].innerHTML;
    

}

////////


/////// actualizar datos
function actualizarfila() {
    Direccion=document.getElementById('Direccion').value
    Peticion=document.getElementById('Peticion').value

    if(Direccion=="" || Peticion==""){
        alert("debe ingresar la informacion en todos los campos")
    }else{
    
        infoForm ["Direccion"]= Direccion;
        infoForm ["Peticion"]= Peticion;
        
       
        selectedRow.cells[1].innerHTML = infoForm.Direccion;
        selectedRow.cells[2].innerHTML = infoForm.Peticion;
    
        
        botoneditar.disabled = true;
        botonenviar.disabled = false;
        alert("Fila editada exitosamente");
        document.getElementById("miForm").reset();
    }   
}
//////////////
/////////eliminar
function onDelete(td){

    if (confirm('Estas seguro de esto? si lo borras perderas la informacion')){
        
        row = td.parentElement.parentElement;
        document.getElementById("mitabla").deleteRow(row.rowIndex);
        ///borrarForm();
        
        var num = document.getElementById('mitabla').rows.length;
       // alert(num)
        if(num==1){
            divtabla.style.display='none';
        }
    }
}
//Ocultar
function ocultar(){
    var div = document.getElementById('mitabla');
    div.style.display='none';
}

//Mostrar
function mostrar(){
    var div = document.getElementById('mitabla');
    div.style.display='';
}///////////