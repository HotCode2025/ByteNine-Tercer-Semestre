
package aritmetica;

import javax.management.openmbean.OpenDataException;


public class Aritmetica {
    public static int division(int numerador, int denominador) throws OpenDataException{
        if(denominador == 0){
            throw new OpenDataException("Division entre cero");
        }
        return numerador / denominador;
    }
}
