from flask import Flask, render_template, request, jsonify #Importar libreria Flask y render_template para renderizar archivos HTMl
import json
from products import products
app = Flask(__name__)

@app.route('/products', methods=['GET'])
def getDatos():
    with open('prueba.json') as json_file:
        Datos = json.load(json_file)
    return jsonify ({"products": Datos,",message":"Lista de datos guardados"})

#######agrega un nuevo prodcuto#########   
@app.route('/products',methods=['POST']) #Enviar datos al JSON
def addProduct():
    new_product = {
        "name":request.json['name'],
        "apellido" : request.json['apellido'],
        "edad" : request.json['edad']
    }
    products.append(new_product)
    with open('prueba.json', 'w') as json_file:
        json.dump(products, json_file)    
    return jsonify({"message": "product added sussefuly","products":products})


@app.route('/products/<string:product_name>',methods=['GET'])
def getProduct(product_name):
    resultado = "null"
    with open('prueba.json') as json_file:
        data = json.load(json_file)
        
        for item in data:
                
            if(item['name']==product_name):
                resultado =  [
                {   "name" : item['name'],
                    "apellido" : item['apellido'],
                    "edad" : item['edad']
                } ,
                
                ]
    if(resultado=="null"):
        return jsonify({"message": "product not found"})
    else:
        return jsonify({"products": resultado,",message":"Lista de productos"})
     


@app.route('/products/<string:product_name>',methods=['DELETE'])
def deleteProduc(product_name):
    product_found=[product for product in products if product['name']==product_name ]
    if(len(product_found)>0):
        products.remove(product_found[0])
        return jsonify({"message": "product delete sussefuly","products":products})
    return jsonify({"message": "product not found"})



@app.route('/products/<string:product_name>',methods=['PUT'])
def editProduct(product_name):
    product_found=[product for product in products if product['name']==product_name ]
    if(len(product_found)>0):
        product_found[0]['name']=request.json['name']
        product_found[0]['apellido']=request.json['apellido']
        product_found[0]['edad']=request.json['edad']
        return jsonify({"message": "product update sussefuly","products":products})
    return jsonify({"message": "product not found"})



#######################################################################################
@app.route('/pqrDatos', methods=['GET','POST']) #Envio de datos pqr
def pqrDatos():
    if request.method == 'POST':
        nombres = request.form['nombres']
        apellidos = request.form['apellidos']
        correo = request.form['correo']
        edad = request.form['edad']
        txtbarrio = request.form['txtbarrio']
        txtfecha = request.form['txtfecha']
        txtproblema = request.form['txtproblema']
        txtpla = request.form['txtpla']
        txtayuda = request.form['txtayuda']

        print("Nombres: "+nombres+"."+" Apellidos: "+apellidos+"."+" Correo:: "+correo+"."+" Edad: "+edad+" Barrio dode reside: "+txtbarrio+"."+" Fecha: "+txtfecha+"."+"¿Que problema presenta? "+txtproblema+". ¿Esta registrado en la página? "+txtpla+". Petición: "+txtayuda+". ")
        archivo = open ("Datos_PQR.txt","a")
        archivo.write("Nombres: "+nombres+" Apellidos: "+apellidos+" Correo: "+correo+" Edad: "+edad+" Barrio donde reside: "+txtbarrio+" Fecha: "+txtfecha+" ¿Que problema presenta? "+txtproblema+" ¿Está registrado en la página? "+txtpla+" Petición: "+txtayuda+"\n")
        archivo.close()
        return f"Datos PQR:  Nombres: {nombres} - Apellidos: {apellidos} - Correo: {correo} - Edad: {edad} Barrio donde reside: {txtbarrio} - Fecha: {txtfecha} - ¿Que problema presenta? {txtproblema} - ¿Está registrado en la página? {txtpla} - Petición: {txtayuda}"
    else:
        return "Respuesta invalida"
###############################################

@app.route('/contactoDatos',methods=['GET','POST']) #Envio de datos contacto
def contactoDatos():
    if request.method == 'POST':
        Nombre = request.form['Nombre']
        Apellido = request.form['Apellido']
        Estudio = request.form['Estudio']
        Conocimientos = request.form['Conocimientos']
        Expe = request.form['Expe']
        suExpe = request.form['suExpe']

        print("Nombres: "+Nombre+"."+" Apellidos: "+Apellido+"."+" Nivel de estudio: "+Estudio+"."+" ¿Conocimientos en programación?: "+Conocimientos+" ¿Experiencia laboral?: "+Expe+"."+" Comentar experiencia: "+suExpe+".")

        archivo1 = open ("Datos_Contacto.txt","a")
        archivo1.write("Nombres: "+Nombre+" Apellidos: "+Apellido+" Nivel de estudio: "+Estudio+" ¿Conocimientos en programación?: "+Conocimientos+" ¿Experiencia laboral?: "+Expe+" Comentar experiencia: "+suExpe+"\n")
        archivo1.close()

        return f"Datos contacto: Nombres: {Nombre} - Apellidos: {Apellido} - Nivel de estudio: {Estudio} - ¿Conocimientos en programación?: {Conocimientos} - ¿Experiencia laboral?: {Expe} - Comentar experiencia: {suExpe}"
    else:
        return "respuesta invalida"


#####################################################################
@app.route('/pqr', methods=['GET','POST']) #Ruta formulario de pqr
def pqr():
    if request.method == 'GET':
        return render_template('pqr.html')
    elif request.method == 'POST':
        pq = request.form.to_dict()
        print(pq)
        return "Datos recibidos"
    else:
        return "Metodo no aceptado"

########################################################################

@app.route('/contacto', methods=['GET','POST']) #Ruta formulario de contacto
def contacto():
    if request.method == 'GET':
        return render_template('contacto.html')
    elif request.method == 'POST':
        Con = request.form.to_dict()
        print(Con)
        return "Datos recibidos"
    else:
        return "Metodo no aceptado"

#########################################################################
@app.route('/calculo', methods=['GET','POST']) #Formulario Calculo 
def calculo():
    if request.method == 'GET':
        return render_template('calculo.html')
    elif request.method == 'POST':
        Cal = request.form.to_dict()
        print(Cal)
        return f"Datos recibidos: {Cal}"
    else:
        return "Metodo no aceptado"


###########################################################################
@app.route('/Calculo',methods=['GET','POST']) #Envio de datos contacto
def Calculo():
    if request.method == 'POST':
        alimento = request.form['alimento']
        medicamento = request.form['medicamento']
        
        print("Dinero destinado para alimentos: "+alimento+" Dinero destinado para medicinas: "+medicamento)

        archiv = open ("Datos_Monetaria.txt","a")
        archiv.write("Dinero destinado para alimentos: "+alimento+" Dinero destinado para medicinas: "+medicamento+"\n")
        archiv.close()
        return f"Datos contacto: Dinero destinado para alimentos: {alimento} - Dinero destinado para medicinas: {medicamento}"
    else:
        return "respuesta invalida"

############################################################################

@app.route('/Envio_Ayudass',methods=['GET','POST']) #Envio de datos contacto
def Envio_Ayudass():
    if request.method == 'POST':
        direccion = request.form['Direccion']
        peticion = request.form['Peticion']
        
        print("Dirección: "+direccion+" Petición: "+peticion)

        archivo2 = open ("Datos_Ayudas.txt","a")
        archivo2.write("Dirección: "+direccion+" Petición: "+peticion+"\n")
        archivo2.close()    

        return f"Dirección {direccion} - Petición: {peticion}"
    else:
        return "respuesta invalida"

##############################################################################

@app.route('/envioAyudas', methods=['POST','GET']) #Formulario de envio de ayudas
def envioAyudas():
    if request.method == 'GET':
        return render_template('envioAyuda.html')
    elif request.method == "POST":
        data = request.form.to_dict()
        print(data)
        return f"Formulario recibido: {data}"
    else:
        return "Metodo no aceptado"

if __name__ == '__main__':
    app.run(port = 4000, debug = True)