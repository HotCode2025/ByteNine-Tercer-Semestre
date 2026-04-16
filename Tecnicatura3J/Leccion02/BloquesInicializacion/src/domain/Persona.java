package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    
    static{ //Bloque de inicialización estático
        System.out.println("Ejecución del bloque estático");
        ++Persona.contadorPersonas;
        // idPersona = 10; No es estático un atributo, por esto tenemos un error
    }
    
    /* Remplazo bloque static
    private static int contadorPersonas = inicializarContador();

    private static int inicializarContador() {
        System.out.println("Ejecución del bloque estático");
        return 1; // En lugar de ++contadorPersonas, devolvemos el valor inicial
    }
    */
    
    { //Bloque de inicialización NO estático (contexto dinámico)
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona = Persona.contadorPersonas++; //Incrementamos el atributo
    }
    
    /* Remplazo bloque no static
    private int idPersona;

        public Persona() {
            this(0); 
        }

        public Persona(int parametro) {
            System.out.println("Ejecución del bloque no estatico");
            this.idPersona = parametro;
        }        
    */
    
    //Los bloques de inicialización se ejecutan antes del constructor
    
    public Persona(){
        System.out.println("Ejecución del constructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
}
