
package test;

import enumeraciones.Dias;
import static enumeraciones.Dias.LUNES;

public class TestEnumeraciones {
    public static void main(String[] args) {
        System.out.println("Dia 1: "+Dias.LUNES);
        indicarDiaSemana(Dias.LUNES); // Las enumeraciones se tratan como cadenas
        // Ahora no se deben utilizar comillas, se accede a traves del operador de punto
    }
    
    // metodo para imprimir
    private static void indicarDiaSemana(Dias dias){
        
        switch(dias){
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
                
             case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
                
                // Agregar todos los dias de la semana.
                // Agregar default
                
             case MIERCOLES:
                System.out.println("Tercer dia de la semana");
                break;
                
             case JUEVES:
                System.out.println("Cuarto dia de la semana");
                break;
                
             case VIERNES:
                System.out.println("Quinto dia de la semana");
                break;
                
             case SABADO:
                System.out.println("Sexto dia de la semana");
                break;
                
             case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;
            
            default:
                System.out.println("Dia no encontrado o no valido");
                break; // ponemos eel break por orden
        }
        
    }
}
