
package test;

import domain.*;

public class TestInstanceOf {
    public static void main(String[] args) {
        
        // Se crea un objeto de tipo Empleado
        // En este momento, empleado1 apunta a un objeto Empleado
        Empleado empleado1 = new Empleado("Juan", 10000);
        
        // Este método serviría para identificar el tipo del objeto
         determinarTipo(empleado1);
        
        // Ahora reutilizamos la misma variable, pero le asignamos un objeto Gerente
        // IMPORTANTE: Gerente es una subclase de Empleado
        // Entonces, aunque la variable sea de tipo Empleado, el objeto real es Gerente
        empleado1 = new Gerente("José", 5000, "Sistemas");
        
        // Se llama al método para determinar el tipo REAL del objeto
        //determinarTipo(empleado1);
    }
    
    // Método que determina el tipo del objeto usando instanceof
    public static void determinarTipo(Empleado empleado){
        
        // Primero se pregunta si el objeto es de tipo Gerente
        // Esto debe ir primero porque Gerente es más específico
        if(empleado instanceof Gerente){
            System.out.println("Es de tipo Gerente");
            Gerente gerente = (Gerente)empleado;
            //((Gerente) empleado).getDepartamento();
            System.out.println("gerente = "+gerente.getDepartamento());
        }
        
        // Si no es Gerente, se verifica si es Empleado
        // Esto se cumple también para Gerente, pero nunca llega acá
        // porque ya fue capturado en el if anterior
        else if(empleado instanceof Empleado){
            System.out.println("Es de tipo Empleado");
            //Gerente gerente = (Gerente)empleado;
            //System.out.println("gerente = "+gerente.getDepartamento());
        }        
        
        else if(empleado instanceof Object){
            System.out.println("Es de tipo Object");
        }
    }
}
