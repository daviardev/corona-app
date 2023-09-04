function regi(){
    var Llave_primaria;
    var Llave_foranea;
    var  txtu=document.getElementById("txtusuario").value;
    var  txtno=document.getElementById("txtnombre").value;
    var  txtap=document.getElementById("txtapellido").value;
    var  txti=document.getElementById("txtid").value;
    var  txtt=document.getElementById("txttelefono").value;
    var  txted=document.getElementById("txtedad").value;
    var  txtco=document.getElementById("txtcontraseña").value;

    if(txtu == "" || txtno == "" || txtap == "" || txti == "" || txtt == "" || txted == "" || txtco == ""){
        alert("Debe llenar todos los campos")
    }else if(window.confirm("¿Desea registrarse?")){
          
    localre=window.localStorage;
    let  dAto=JSON.parse(localre.getItem('DatosRegistro')) || [];
    dAto.push({Llave_primaria, txtu,txtno,txtap,id: 1, txti,txtt,Llave_foranea, txted,txtco});
    
    Datare = JSON.stringify(dAto);
    localre.setItem('DatosRegistro',Datare)
    alert("Registrado con exito!!! Usuario: "+txtu)
    }else{
        alert("Tomase su tiempo")
    }
 }