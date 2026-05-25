
package paquete2;


public class Clase4 {
    private String atributoPrivate = "atributo Privado";
    
    private Clase4(){
        System.out.println("Costructor privado");
    }
    
    // Creamos un constructor public para poder crear objetos
    public Clase4(String argumento){ // Aqui se puede llamar al constructor vacio
        this();
        System.out.println("Constructor Publico");
    }
    
    // Metodo private
    private void metodoprivado(){
        System.out.println("Metodo privado");
    }

    public String getAtributoPrivate() {
        return atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }
    
    
}
