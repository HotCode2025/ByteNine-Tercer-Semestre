// CLASE PADRE DISPOSITIVO DE ENTRADA 
class DispositivoEntrada{

    //CONSTRUCTOR
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    // GETTERS Y SETTERS

    //Obtenemos el valor para tipo de entrada 
    get tipoEntrada() { 
        return this._tipoEntrada; 
    }

    // Establecemos el valor.Validammos el valor
    set tipoEntrada(tipoEntrada) { 
        this._tipoEntrada = tipoEntrada; 
    }

    // Leemos el valor para marca
    get marca() { 
        return this._marca; 
    }
    
    // Validamos marca
    set marca(marca) { 
        this._marca = marca; 
    }
}

    // CLASES HIJAS: Raton y Teclado
class Raton extends DispositivoEntrada {
    static contadorRatones = 0; // atributo estatico para contar los ratones

    constructor(tipoEntrada, marca) {
        // Metodo super. Enviamos Tipo y marca al constructor del Padre.
        super(tipoEntrada, marca); 
        //Identificador Único: Vamos a incrementar cada vez que hagamos un nuevo ratón
        this._idRaton = ++Raton.contadorRatones;
    }
    // METODO GET: Permite leer el ID desde afuera.
    get idRaton(){
        return this._idRaton;
    }
    // METODO toString: Define el formato de la ficha tecnica  del objeto.
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

// PRUEBAS DE INSTANCIA(Creamos los objetos reales)
let raton1 = new Raton(`USB`, `GENIUS`);
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth', 'Logi');
console.log(raton2.toString());


class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);//super: Pasamos marca y tipo al constructor del Padre DispositivoEntrada
        this._idTeclado = ++Teclado.contadorTeclado; // Se increnta el marcador con un nuevo teclado 
    }
    // METODO GETTER(Para obtener el ID único del teclado)
    get idTeclado(){
        return this._idTeclado
    }

    //Definimos como se muestra el teclado en la consola o en la Orden
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} ]`
    }
}

// PRUEBAS DE INSTANCIA(Creamos los objetos reales)
let teclado1 = new Teclado('USB', 'Logi');
console.log(teclado1.toString());
let teclado2 = new Teclado('Bluetooth', 'MSI')
console.log(teclado2.toString());


//CLASE INDEPENDIENTE MONITOR
class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }
    get idMonitor(){
        return this._idMonitor;

    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamanio}]`;
    }
}

// PRUEBAS DE INSTANCIA(Creamos los objetos reales)
let monitor1 = new Monitor("LENOVO", 3);
let monitor2 = new Monitor("HP", 6);

console.log(monitor1.toString());
console.log(monitor2.toString());

//CLASE DE AGREGACION COMPUTADORA
class Computadora {
    static contadorComputadoras = 0;

    // El constructor recibe objetos completos de Raton, teclado y Monitor
    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor; // Guardamos el objeto monitor
        this._teclado = teclado; // guardamos el objeto teclado
        this._raton = raton; //guardamos el objeto raton
    }
    // con toString llamamos  automaticamente al toString de cada componente
    toString() {
        return `Computadora: [${this._idComputadora}: ${this._nombre}\n  ${this._monitor}\n  ${this._teclado}\n  ${this._raton}]`;
    }
}


//Pruebas de Instancia Real
// Usamos las variables monitor1, teclado1 y raton1 que  ya definimos arriba.
let computadora1 = new Computadora("Gamer", monitor1, teclado1, raton1);
// Usamos las variables monitor2, teclado2 y raton2
let computadora2 = new Computadora("Oficina", monitor2, teclado2, raton2);

// LLamamos a toString y vamos a tener los ID de cada componente
console.log(computadora1.toString());
console.log(computadora2.toString());


// cLASE DE RELACION DE AGREGACIÓN Orden
class Orden {
    static contadorOrdenes = 0; // El motor de los ID

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;

        //Creamos un array vacio  donde se guardaran las computadoras que agreguemos
        this._computadoras = [];
    }

    get idOrden(){
    return this._idOrden;
    }
    
    // METODO DE ACCIÓN: Este va a recibir una PC y la mete en el arreglo.
    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    // METODO DE SALIDA:Recorrera el carrito y armara  el texto final.
    mostrarOrden() {
        let computadorasOrden = '';
        //Rrecorremos el array una por una
        for (let computadora of this._computadoras) {
            
            computadorasOrden += `\n${computadora}`; 
        }
        //Se va sumando el texto de cada PC a la orden final
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}


// SECTOR PRUEBAS  FINALES

// Creacion de instancia de gestion
let orden1 = new Orden();
let orden2 = new Orden();

// Agregamos computadoras a la Orden 1
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2); //Repetimos una orden

//Agregamos computadoras a la Orden 2
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);

// Mostramos los resultado por consola.
console.log('--- RESULTADOS DE LA ORDEN 1 ---');
orden1.mostrarOrden();

console.log('\n--- RESULTADOS DE LA ORDEN 2 ---');
orden2.mostrarOrden();