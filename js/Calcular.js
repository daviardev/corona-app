
var divtabla=document.getElementById('cuadro')// cuadro dentro de la tabla
var i=1;//contadora
var botonenviar=document.getElementById('btnagregar')
var botoneditar=document.getElementById('btneditar')
botoneditar.disabled = true;//no habilitado editar

var infoForm={}; //variabkle tipo

function Procesar() { //calcula y agrega a la fila de la tabla
    var llave_primaria;
    var llave_foranea;

var Cantidad_alimentos = document.getElementById('txtbase').value
var Cantidad_medicamentos = document.getElementById('txtaltura').value
var Total_donado= parseFloat(Cantidad_alimentos)+parseFloat(Cantidad_medicamentos);

///validacion de campos requeridos
if(Cantidad_alimentos=="" || Cantidad_medicamentos==""){
    alert("debe ingresar la informacion en todos los campos")
}else if(window.confirm("Total a pagar: "+Total_donado+" ¿Desea abonar?")){
    var Total_donado = parseFloat(Cantidad_alimentos)+parseFloat(Cantidad_medicamentos);
    nubestorage = window.localStorage;
    let DATOS = JSON.parse(nubestorage.getItem("DatosCalculo")) || [];
    DATOS.push({id:i, llave_primaria, Cantidad_alimentos, llave_foranea, Cantidad_medicamentos, Total_donado});

    perca = JSON.stringify(DATOS);
    nubestorage.setItem('DatosCalculo',perca);
    alert("Registro guardado");

//////////////////  cambio de formato

    infoForm ["id"]= i++;
    infoForm ["Cantidad_alimentos"]= Cantidad_alimentos;
    infoForm ["Cantidad_medicamentos"]= Cantidad_medicamentos;
    infoForm ["Total_donado"]= Total_donado;
////////////////

/////////////// insertar a la tabla
var tabla = document.getElementById("mitabla");
    var nuevaFila = tabla.insertRow(tabla.lenght);

    cell1 = nuevaFila.insertCell(0);
    cell1.innerHTML = infoForm.id;

    cell2 = nuevaFila.insertCell(1);
    cell2.innerHTML = infoForm.Cantidad_alimentos;

    cell3 = nuevaFila.insertCell(2);
    cell3.innerHTML = infoForm.Cantidad_medicamentos;

    cell4 = nuevaFila.insertCell(3);
    cell4.innerHTML = infoForm.Total_donado;

    cell4 = nuevaFila.insertCell(4);
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
    document.getElementById("txtbase").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txtaltura").value = selectedRow.cells[2].innerHTML;
    

}

////////


/////// actualizar datos
function actualizarfila() {
    Cantidad_alimentos = document.getElementById('txtbase').value
    Cantidad_medicamentos = document.getElementById('txtaltura').value

    if(Cantidad_alimentos=="" || Cantidad_medicamentos==""){
        alert("debe ingresar la informacion en todos los campos")
    }else{
        Total_donado= parseFloat(Cantidad_alimentos)+parseFloat(Cantidad_medicamentos);
    
        infoForm ["Cantidad_alimentos"]= Cantidad_alimentos;
        infoForm ["Cantidad_medicamentos"]= Cantidad_medicamentos;
        infoForm ["Total_donado"]= Total_donado;
        
       
        selectedRow.cells[1].innerHTML = infoForm.Cantidad_alimentos;
        selectedRow.cells[2].innerHTML = infoForm.Cantidad_medicamentos;
        selectedRow.cells[3].innerHTML = infoForm.Total_donado;
    
        
        botoneditar.disabled = true;
        botonenviar.disabled = false;
        alert("Fila editada exitosamente, nuevo monto donado es "+Total_donado);
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
}

/////////////