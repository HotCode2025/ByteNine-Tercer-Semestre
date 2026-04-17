
package ar.com.system2025.mundopc;


 // CLASE HIJA: Raton
 // Esta clase hereda de DispositivoEntrada.
 // Incorpora un identificador unico autoincremental específico para objetos Raton
public class Raton extends DispositivoEntrada {
     // 1. ATRIBUTOS PROPIOS
    private final int idRaton;
    private static int contadorRatones;
    
    // 2. CONSTRUCTOR
    public Raton(String tipoEntrada, String marca){
        // Invocación al constructor de la Clase Padre (DispositivoEntrada)
        super(tipoEntrada, marca);
        // Asignación de ID mediante pre-incremento:
        // Primero incrementa el contador global y luego asigna el valor al atributo
        this.idRaton = ++Raton.contadorRatones;
        
    
    }
    
    // 3. MÉTODOS DE REPRESENTACIÓN
    @Override
    public String toString() {
        //Combina los atributos propios con los de la clase padre mediante super.toString()
        return "Raton{" + "idRaton=" + idRaton + ", "+super.toString() +  '}';
    }
    
    
}
