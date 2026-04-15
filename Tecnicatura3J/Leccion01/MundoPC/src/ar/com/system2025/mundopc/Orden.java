package ar.com.system2025.mundopc;

public class Orden {
    
    // ATRIBUTOS
    private final int idOrden;
    private final Computadora computadora[]; //Arreglo de objetos
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadora;
    
    //agregamos una bandera para mostrar en la tarea 
    //si la orden cumple las reglas para ser procesada
    // Tarea:  Verificamos si ya llegamos al límite justo antes de intentar agregar
    private boolean esValida = true; // Por defecto  va a ser  verdadera
    
    //CONSTRUCTOR 
    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
    }
    
    // Agrega una computadora al arreglo validando el límite de capacidad.
    //Si se intenta superar el máximo, la orden se bloquea por seguridad.
    // computadora Objeto a integrar en la orden.
    public void agregarComputadora(Computadora computadora) {
        // Verificamos si hay espacio disponible antes de insertar
        if (this.contadorComputadora < Orden.MAX_COMPUTADORAS) {
            this.computadora[this.contadorComputadora++] = computadora;
            
        // MMANEJO DEL ERROR( no se imprimira la Orden)    
        } else {
            //Agregamos bloqueo para que no se imprima la orden si se supero
            this.esValida = false; // AQUÍ: La orden se marca como inválida
            System.out.println("\n[ERROR]: Supero el limite (10). Se ha bloqueado la impresion de la Orden #" + this.idOrden);
            System.out.println("Intento de ingreso número: " + (this.contadorComputadora + 1));
        }
    }
     // Mostramos el reporte detallado de la orden.
    // Implementa una validación de estado: si la orden es inválida,
    // no mostramos  datos inconsistentes.
    public void mostrarOden() {
        // Uso de la bandera lógica para decidir la salida
        if (this.esValida) {
            System.out.println("Orden #: " + this.idOrden);
            // Recorrido del arreglo basado en el contador actual (no en el largo total)
            for (int i = 0; i < this.contadorComputadora; i++) {
                System.out.println(this.computadora[i]);
            }
        } else {
            // Devolucion  preventivo para el usuario
            System.out.println("--- LA ORDEN #" + this.idOrden + " NO SE PUEDE MOSTRAR POR EXCESO DE ITEMS ---");
            System.out.println("Por favor, revise la carga de datos.");
        }
    }
}
