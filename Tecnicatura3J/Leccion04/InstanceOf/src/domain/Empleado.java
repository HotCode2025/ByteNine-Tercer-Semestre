//
package domain;

// Clase padre
public class Empleado {
    //Atributos
    protected String nombre;
    protected double sueldo;
    
    //Contructor
    public Empleado (String nombre, double sueldo){
        
        //instanciamos
        this.nombre = nombre;
        this.sueldo = sueldo;
        
    }
    
    // Metodo para la sobreescritura
    public String obtenerDetalles(){
        return "Nombre: "+this.nombre+", Sueldo; "+this.sueldo;
    }
    
    // Metodos Get y Set

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }
    
   
}
