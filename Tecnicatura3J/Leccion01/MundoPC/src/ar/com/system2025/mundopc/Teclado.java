
package ar.com.system2025.mundopc;


 // CLASE HIJA: Teclado
 // Al igual que la clase Raton, hereda de DispositivoEntrada.
 //Implementa su propio contador estatico para diferenciar cada instancia de teclado.
public class Teclado extends DispositivoEntrada {
     // 1. ATRIBUTOS PROPIOS
    private final int idTeclado; //Identificador único e inmutable
    private static int contadorTeclados;// Contador de clase para la gestión de IDs
    
    // 2. CONSTRUCTOR
    
    public Teclado(String tipoEntrada, String marca){
        // Comunicación directa con el constructor de DispositivoEntrada
        super(tipoEntrada, marca);
        // Pre-incremento para asegurar que el primer ID sea 1
        this.idTeclado = ++Teclado.contadorTeclados;
        
    }
    
    // 3. MÉTODOS DE REPRESENTACIÓN
    
    // Sobreescritura del método toString.
    // Reutiliza la lógica de la clase padre (super.toString()) 
    @Override
    public String toString() {
        return "Teclado{" + "idTeclado=" + idTeclado +", "+super.toString() + '}';
    }
    
}
