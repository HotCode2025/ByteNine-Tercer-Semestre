class DispositivoEntrada{

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let raton1 = new Raton(`USB`, `GENIUS`);
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth', 'Logi');
console.log(raton2.toString());

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} ]`
    }
}

let teclado1 = new Teclado('USB', 'Logi');
console.log(teclado1.toString());
let teclado2 = new Teclado('Bluetooth', 'MSI')
console.log(teclado2.toString());

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

let monitor1 = new Monitor("LENOVO", 3);
let monitor2 = new Monitor("HP", 6);

console.log(monitor1.toString());
console.log(monitor2.toString());

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    toString() {
        return `Computadora: [${this._idComputadora}: ${this._nombre}\n  ${this._monitor}\n  ${this._teclado}\n  ${this._raton}]`;
    }
}
let computadora1 = new Computadora("Gamer", "Monitor LG 24", "Teclado Mecánico", "Raton Logitech");
let computadora2 = new Computadora("Oficina", "Monitor Dell 22", "Teclado Membrana", "Raton Microsoft");
console.log(computadora1.toString());
console.log(computadora2.toString());

class Orden {
    get idOrden(){
    return this._idorden;
    }
    agregarComputadora (computadora){
        this._computadoras. push(computadora); //Agregamos los objetos
    }
    mostrarorden (){
    let computadorasOrden = ''; //Variable temporal
    for (let computadora of this._computadoras){
        computadorasOrden += '\n${computadora) ' ;
    }
    console. log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);//Se puede repetir una orden
orden1.mostrarOrden();

let orden2 = new Orden();
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();