class Animal {
    nombre;
    raza;
    especie;
    edad;
    
    constructor(nombre, raza, especie, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.especie = especie;
        this.edad = edad;
    }
    
    registrarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    registrarRaza(nuevaRaza) {
        this.raza = nuevaRaza;
    }
    registrarEspecie(nuevaEspecie) {
        this.especie = nuevaEspecie;
    }
    registrarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
    }
    
    // Corregido el nombre del método y añadido espacio
    mostrarInformacion() {
        console.log(this.nombre + " " + this.raza);
    }
}

class Propietario {
    nombrePropietario;
    Direccion;
    Telefono;
    
    constructor(nombrePropietario, Direccion, Telefono) {
        this.nombrePropietario = nombrePropietario;
        this.Direccion = Direccion;
        this.Telefono = Telefono;
        this.mascota = [];
    }
    
    registrarNombre(nuevoNombre) {
        this.nombrePropietario = nuevoNombre;
    }
    registrarDireccion(nuevaDireccion) {
        this.Direccion = nuevaDireccion;
    }
    registrarTelefono(nuevoTelefono) {
        this.Telefono = nuevoTelefono;
    }
    registrarMascota(nuevaMascota) {
        this.mascota.push(nuevaMascota);
    }
    
    mostrarInformacion() {
        // Corregido para acceder al .nombre de la mascota y dar formato
        console.log("Mascota: " + this.mascota[0].nombre + " | Propietario: " + this.nombrePropietario);
    }
}

let colmillo = new Animal("Colmillo", "Pitbull", "perro", 12);
colmillo.mostrarInformacion(); 
// Imprime: Colmillo Pitbull

let alexa = new Propietario("Alexa", "123", "1111");
alexa.registrarMascota(colmillo);
alexa.mostrarInformacion(); 
// Imprime: Mascota: Colmillo | Propietario: Alexa