
package test;


import domain.*;


public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        // asignamos referecia con los parametros necesarios
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        System.out.println("empleado = "+empleado);
        //System.out.println(empleado.obtenerDetalles()); //Si queremoa acceder a metodos Escritor
        //empleado.getTipoEscritura();// No se puede hacer necesita la conversion
        
        //Conversion de objetos
        //Downcasting
        //((Escritor)empleado).getTipoEscritura(); // Tenemos dos opciones  esta es una
        Escritor escritor = (Escritor)empleado; //Esta es la segunda
        escritor.getTipoEscritura();
        
        
        //Upcasting (se realiza de manera automatica)
        //Empleado empleado2 = escritor;
        //System.out.println(empleado2.obtenerDetalles());
        
               
        
    }
    
}
