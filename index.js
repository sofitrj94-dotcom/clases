class Animal {
    nombre
    raza
    especie
    edad

    constructor(nombre, raza, especie, edad) {
        this.nombre = nombre
        this.raza = raza
        this.especie = especie
        this.edad = edad
    }
    registrarNombre(nuevonombre) {
        this.nombre = nuevonombre
    }
    registrarRaza(nuevaRaza) {
        this.raza = nuevaRaza
    }
    registrarEspecie(nuevaEspecie) {
        this.especie = nuevaEspecie
    }
    registrarEdad(nuevaEdad) {
        this.edad = nuevaEdad
    }
    mostrarInformacion() {
        console.log(this.nombre + this.raza)
    }
}

class Propietario {
    nombrePropietario
    Direccion
    Telefono
    constructor(nombre, direccion, telefono) {
        this.nombrePropietario = nombre
        this.Direccion = direccion
        this.telefono = telefono
        this.mascota = []
    }
    registrarNombre(nuevoNombre) {
        this.nombrePropietario = nuevoNombre
    }
    registrarDireccion(nuevaDireccion) {
        this.Direccion = nuevaDireccion
    }
    registrarTelefono(nuevaTelefono) {
        this.telefono = nuevaTelefono
    }
    registrarMascota(nuevamascota) {
        //pop,unshift,shift,push
        this.mascota.push(nuevamascota)
    }
    mostrarInformacion(){
        console.log("mascota: "+this.mascota+"Propietario: "+this.nombrePropietario)
    }
}
let colmillo = new Animal("colmillo", "pitbull", "perro", "123")
colmillo.mostrarInformacion()
let karen = new Propietario("Karen", "123", "1111")
karen.registrarMascota(colmillo)
karen.mostrarInformacion()