from flask import Flask, render_template, request, jsonify
import json
from Usuarios import Usuarios
app = Flask(__name__)

@app.route('/usuarios',methods=['GET'])
def getUsers():
    with open('registro.json') as json_file:
        Datos = json.load(json_file)
    return jsonify({"Usuarios":Datos,",message":"Lista de usaurios registrados"})


@app.route('/usuarios',methods=['POST'])
def addUser():
    new_user = {
        "usuario": request.json ['usuario'],
        "contrasena": request.json ['contrasena'],
        "Nombre": request.json ['Nombre'],
        "Apellido": request.json ['Apellido'],
        "Cargo": request.json ['Cargo'],
        "telefono": request.json ['telefono'],
        "identificacion": request.json ['identificacion'],
        "edad": request.json ['edad'],
        "Correo": request.json ['Correo']
    }
    Usuarios.append(new_user)
    with open('registro.json','w') as json_file:
        json.dump(Usuarios, json_file)
    return jsonify({"message": "Usuario añadido correctamente","Usuarios":Usuarios})



if __name__ == '__main__':
    app.run(port=4000, debug = True)