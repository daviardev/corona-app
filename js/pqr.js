
var divtabla=document.getElementById('cuadro')// cuadro dentro de la tabla
var i=1;//contadora
var botonenviar=document.getElementById('btnagregar')
var botoneditar=document.getElementById('btneditar')
botoneditar.disabled = true;//no habilitado editar

var infoForm={}; //variabkle tipo

function Procesar() { //calcula y agrega a la fila de la tabla

var nombre = document.getElementById('nombres').value;
var apellido = document.getElementById('apellidos').value;
var Correo = document.getElementById('correo').value;
var Edad = document.getElementById('edad').value;
var Barrio = document.getElementById('txtbarrio').value;
var Fecha = document.getElementById('txtfecha').value;
var Problema = document.getElementById('txtproblema').value;
var Registrado = document.getElementById('txtpla').value;
var Ayuda = document.getElementById('txtayuda').value;


///validacion de campos requeridos
if(nombre=="" || apellido=="" || Correo=="" || Edad=="" || Barrio=="" || Fecha=="" || Problema=="" || Registrado=="" || Ayuda==""){
    alert("debe ingresar la informacion en todos los campos")
}else if(window.confirm("¿Deséa guardar el registro?")){
    Loca = window.localStorage;
    let datoSs = JSON.parse(Loca.getItem("Datospqr")) || [];
    datoSs.push({nombre,apellido,Correo,Edad,Barrio,Fecha,Problema,Registrado,Ayuda});

    Data = JSON.stringify(datoSs);
    Loca.setItem('Datospqr',Data);
    alert("Registro guardado");

//////////////////  cambio de formato

    infoForm ["id"]= i++;
    infoForm ["nombre"]= nombre;
    infoForm ["apellido"]= apellido;
    infoForm ["Correo"]= Correo;
    infoForm ["Edad"]= Edad;
    infoForm ["Barrio"]= Barrio;
    infoForm ["Fecha"]= Fecha;
    infoForm ["Problema"]= Problema;
    infoForm ["Registrado"]= Registrado;
    infoForm ["Ayuda"]= Ayuda;
////////////////

/////////////// insertar a la tabla
var tabla = document.getElementById("mitabla");
    var nuevaFila = tabla.insertRow(tabla.lenght);

    cell1 = nuevaFila.insertCell(0);
    cell1.innerHTML = infoForm.id;

    cell2 = nuevaFila.insertCell(1);
    cell2.innerHTML = infoForm.nombre;

    cell3 = nuevaFila.insertCell(2);
    cell3.innerHTML = infoForm.apellido;

    cell4 = nuevaFila.insertCell(3);
    cell4.innerHTML = infoForm.Correo;

    cell5 = nuevaFila.insertCell(4);
    cell5.innerHTML = infoForm.Edad;

    cell6 = nuevaFila.insertCell(5);
    cell6.innerHTML = infoForm.Barrio;

    cell7 = nuevaFila.insertCell(6);
    cell7.innerHTML = infoForm.Fecha;

    cell8 = nuevaFila.insertCell(7);
    cell8.innerHTML = infoForm.Problema;

    cell8 = nuevaFila.insertCell(8);
    cell8.innerHTML = infoForm.Registrado;

    cell9 = nuevaFila.insertCell(9);
    cell9.innerHTML = infoForm.Ayuda;

    cell10 = nuevaFila.insertCell(10);
    cell10.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Editar</a>
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

    document.getElementById("nombres").value = selectedRow.cells[1].innerHTML;
    document.getElementById("apellidos").value = selectedRow.cells[2].innerHTML;
    document.getElementById("correo").value = selectedRow.cells[3].innerHTML;
    document.getElementById("edad").value = selectedRow.cells[4].innerHTML;
    document.getElementById("txtbarrio").value = selectedRow.cells[5].innerHTML;
    document.getElementById("txtfecha").value = selectedRow.cells[6].innerHTML;
    document.getElementById("txtproblema").value = selectedRow.cells[7].innerHTML;
    document.getElementById("txtpla").value = selectedRow.cells[8].innerHTML;
    document.getElementById("txtayuda").value = selectedRow.cells[9].innerHTML;


}

////////


/////// actualizar datos
function actualizarfila() {
   
    nombre = document.getElementById('nombres').value;
    apellido = document.getElementById('apellidos').value;
    Correo = document.getElementById('correo').value;
    Edad = document.getElementById('edad').value;
    Barrio = document.getElementById('txtbarrio').value;
    Fecha = document.getElementById('txtfecha').value;
    Problema = document.getElementById('txtproblema').value;
    Registrado = document.getElementById('txtpla').value;
    Ayuda = document.getElementById('txtayuda').value;


    if(nombre=="" || apellido=="" || Correo=="" || Edad=="" || Barrio=="" || Fecha=="" || Problema=="" || Registrado=="" || Ayuda==""){
        alert("debe ingresar la informacion en todos los campos")
    }else{
    
        infoForm ["nombre"]= nombre;
        infoForm ["apellido"]= apellido;
        infoForm ["Correo"]= Correo;
        infoForm ["Edad"]= Edad;
        infoForm ["Barrio"]= Barrio;
        infoForm ["Fecha"]= Fecha;
        infoForm ["Problema"]= Problema;
        infoForm ["Registrado"]= Registrado;
        infoForm ["Ayuda"]= Ayuda;
        

        selectedRow.cells[1].innerHTML = infoForm.nombre;
        selectedRow.cells[2].innerHTML = infoForm.apellido;
        selectedRow.cells[3].innerHTML = infoForm.Correo;
        selectedRow.cells[4].innerHTML = infoForm.Edad;
        selectedRow.cells[5].innerHTML = infoForm.Barrio;
        selectedRow.cells[6].innerHTML = Fecha;
        selectedRow.cells[7].innerHTML = Problema;
        selectedRow.cells[8].innerHTML = Registrado;
        selectedRow.cells[9].innerHTML = Ayuda;
       
        
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
}

/////////////