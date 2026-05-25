
//Clase 3 forEach, Autoboxing, Unboxing, Modificadores de acceso
//Tema: 1.1 Manejo del forEach Parte 1 y 2
package domain;

public class Persona {
    //Atributo
    private String nombre;
    
    // Costructor

    public Persona(String nombre) {
        this.nombre = nombre;
    }
    
    
    //Metodos

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    // Metodoa toString

    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + '}';
    }
    
    
}
