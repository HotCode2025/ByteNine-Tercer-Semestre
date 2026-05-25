
package test;

import accesodatos.*;

public class TestInterfaces {
    public static void main(String[] args) {
        IAccesoDatos datos = new ImplementacionMySql();
        datos.listar();
        
        datos = new ImplementacionOracle();
        //datos.listar();
        imprimir(datos);
        datos = new ImplementacionOracle();
        //datos.listar();
    }
    
    public static void imprimir(IAccesoDatos datos){
        datos.listar();
    }
}
