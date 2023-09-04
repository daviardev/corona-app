function exportarExcel(tablaID, filename = ""){

    var descargarEXCEL;
    var tipoDato = 'application/vnd.ms-excel';
    var seleccionar = document.getElementById(tablaID);
    var tablaHTML = seleccionar.outerHTML.replace(/ /g, '%20');

    //Nombre del archivo
    filename = filename?filename+'.xls':'Reporte.xls';

    //Crear link de descarga
    descargarEXCEL = document.createElement("a");

    document.body.appendChild(descargarEXCEL);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff',tablaHTML],{
            type: tipoDato
        });
        navigator.msSaveOrOpenBlob(blob,filename);
    }else{
        //Crear link para el archivo
        descargarEXCEL.href = 'data: '+tipoDato+', '+tablaHTML;

        //Configurar el nombre del archivo
        descargarEXCEL.download = filename;

        descargarEXCEL.click();
    }
}