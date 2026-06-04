import java.util.Scanner;

public class CalculadoraUTN {

    static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("******* Aplicación Calculadora *******");
        System.out.print("Digite el valor para operando1: ");
        var operando1 = Integer.parseInt(entrada.nextLine());
        System.out.print("Digite el valor para operando2: ");
        var operando2 = Integer.parseInt(entrada.nextLine());
        var resultado = operando1 + operando2;
        System.out.println("resultado = " + resultado);

    }
}
