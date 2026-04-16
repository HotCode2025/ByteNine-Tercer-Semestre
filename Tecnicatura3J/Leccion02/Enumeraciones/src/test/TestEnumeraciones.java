
package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;


public class TestEnumeraciones {
    public static void main(String[] args) {
        //System.out.println("Dia 1: "+Dias.LUNES);
        //indicarDiaSemana(Dias.LUNES); // Las enumeraciones se tratan como cadenas
        // Ahora no se deben utilizar comillas, se accede a traves del operador de punto
        
        // probamos el metodo continentes
        //Acceder a un elemento
        System.out.println("Continente No. 4: "+Continentes.AMERICA);
        System.out.println("No. de paises en el 4to. continente: "
                +Continentes.AMERICA.getPaises());
        System.out.println("No. de habitantes en el 4to. Continente: "
                +Continentes.AMERICA.getHabitantes());
        
        // Agregamos la ejecucion del resto de los continentes
        System.out.println("Continente No. 1: "+Continentes.AFRICA);
        System.out.println("No. de paises en el 4to. continente: "
                +Continentes.AFRICA.getPaises());
        System.out.println("No. de habitantes en el 4to. Continente: "
                +Continentes.AFRICA.getHabitantes());
        
        System.out.println("Continente No. 4: "+Continentes.EUROPA);
        System.out.println("No. de paises en el 4to. continente: "
                +Continentes.EUROPA.getPaises());
        System.out.println("No. de habitantes en el 4to. Continente: "
                +Continentes.EUROPA.getHabitantes());
        
        System.out.println("Continente No. 4: "+Continentes.ASIA);
        System.out.println("No. de paises en el 4to. continente: "
                +Continentes.ASIA.getPaises());
        System.out.println("No. de habitantes en el 4to. Continente: "
                +Continentes.ASIA.getHabitantes());
        
        System.out.println("Continente No. 4: "+Continentes.OCEANIA);
        System.out.println("No. de paises en el 4to. continente: "
                +Continentes.OCEANIA.getPaises());
        System.out.println("No. de habitantes en el 4to. Continente: "
                +Continentes.OCEANIA.getHabitantes());
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
