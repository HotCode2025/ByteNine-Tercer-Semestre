
//Clase 3 forEach, Autoboxing, Unboxing, Modificadores de acceso
//Tema: 1.1 Manejo del forEach Parte 1 y 2
package test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args) {
        //arreglo con 4 elementos
        int edades [] = {5, 6, 8, 9 }; // sintaxis resumida
        for (int edad:  edades) { // sintasis del forEach
            System.out.println("Edad = "+ edad); // De esta manera NO se puede acceder al indice
            
        }
        
        // Arreglo de tipo persona. (arreglo de objeto con 3 atributos)
        // no podemos utilizar  la inferencia de tipo var en un arreglo 
        Persona personas[] = {new Persona("Juan"), new Persona("Carla"), new Persona("Beatriz")};
        
        // Carga del ForEach
        for(Persona persona: personas){
            System.out.println("persona = " + persona);
        }
    }
    
    
}
