
var divtabla=document.getElementById('cuadro')// cuadro dentro de la tabla
var i=1;//contadora
var botonenviar=document.getElementById('btnagregar')
var botoneditar=document.getElementById('btneditar')
botoneditar.disabled = true;//no habilitado editar

var infoForm={}; //variabkle tipo

function Procesar() { //calcula y agrega a la fila de la tabla
    var Llave_primaria;
    var Llave_foranea;

var nombre = document.getElementById('Nombre').value;
var apellido = document.getElementById('Apellido').value;
var nivelEstudio = document.getElementById('Estudio').value;
var conocimientos = document.getElementById('Conocimientos').value;
var esperienciaLaboral = document.getElementById('Expe').value;
var suExperiencia = document.getElementById('suExpe').value;

///validacion de campos requeridos
if(nombre=="" || apellido=="" || nivelEstudio=="" || conocimientos=="" || esperienciaLaboral=="" || suExperiencia==""){
    alert("debe ingresar la informacion en todos los campos")
}else if(window.confirm("¿Deséa guardar el registro?")){
    localDatos = window.localStorage;
    let datosS = JSON.parse(localDatos.getItem("DatosContacto")) || [];
    datosS.push({id:i, nombre, Llave_primaria, apellido, nivelEstudio, conocimientos, esperienciaLaboral, Llave_foranea, suExperiencia});

    Datos = JSON.stringify(datosS);
    localDatos.setItem('DatosContacto',Datos);
    alert("Registro guardado");

//////////////////  cambio de formato

    infoForm ["id"]= i++;
    infoForm ["nombre"]= nombre;
    infoForm ["apellido"]= apellido;
    infoForm ["nivelEstudio"]= nivelEstudio;
    infoForm ["conocimientos"]= conocimientos;
    infoForm ["esperienciaLaboral"]= esperienciaLaboral;
    infoForm ["suExperiencia"]= suExperiencia;
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
    cell4.innerHTML = infoForm.nivelEstudio;

    cell5 = nuevaFila.insertCell(4);
    cell5.innerHTML = infoForm.conocimientos;

    cell6 = nuevaFila.insertCell(5);
    cell6.innerHTML = infoForm.esperienciaLaboral;

    cell7 = nuevaFila.insertCell(6);
    cell7.innerHTML = infoForm.suExperiencia;

    cell8 = nuevaFila.insertCell(7);
    cell8.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Editar</a>
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


    document.getElementById("Nombre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Apellido").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Estudio").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Conocimientos").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Expe").value = selectedRow.cells[5].innerHTML;
    document.getElementById("suExpe").value = selectedRow.cells[6].innerHTML;

}

////////


/////// actualizar datos
function actualizarfila() {
   
    nombre = document.getElementById('Nombre').value;
    apellido = document.getElementById('Apellido').value;
    nivelEstudio = document.getElementById('Estudio').value;
    conocimientos = document.getElementById('Conocimientos').value;
    esperienciaLaboral = document.getElementById('Expe').value;
    suExperiencia = document.getElementById('suExpe').value;

    if(nombre=="" || apellido=="" || nivelEstudio=="" || conocimientos=="" || esperienciaLaboral=="" || suExperiencia==""){
        alert("Debe ingresar la informacion en todos los campos")
    }else{
    
        infoForm ["nombre"]= nombre;
        infoForm ["apellido"]= apellido;
        infoForm ["nivelEstudio"]= nivelEstudio;
        infoForm ["conocimientos"]= conocimientos;
        infoForm ["esperienciaLaboral"]= esperienciaLaboral;
        infoForm ["suExperiencia"]= suExperiencia;
        

        selectedRow.cells[1].innerHTML = infoForm.nombre;
        selectedRow.cells[2].innerHTML = infoForm.apellido;
        selectedRow.cells[3].innerHTML = infoForm.nivelEstudio;
        selectedRow.cells[4].innerHTML = infoForm.conocimientos;
        selectedRow.cells[5].innerHTML = infoForm.esperienciaLaboral;
        selectedRow.cells[6].innerHTML = suExperiencia;
       
        
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