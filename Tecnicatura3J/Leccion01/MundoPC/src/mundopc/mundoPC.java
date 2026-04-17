
package mundopc;

import ar.com.system2025.mundopc.*; // importamos todas las clases necesaris

public class mundoPC {
    public static void main(String[] args) {
        
        // 1. CREACIÓN DE DISPOSITIVOS ENTRADA/SALIDA
        // Marca HP
        //Objetos HP
        Monitor monitorHP = new Monitor("HP", 13); //Importar la clase monitor
        Teclado tecladoHP  = new Teclado("Bluetooth", "HP"); //Importamos la clase teclado
        Raton ratonHP = new Raton("Bluetooth", "HP");//Importamos la clase raton y su objeto
        
        // Marca Gamer
        //Objetos Gamer
        Monitor monitorGamer = new Monitor("Gamer", 32); //Importar la clase monitor
        Teclado tecladoGamer  = new Teclado("Bluetooth", "Gamer"); //Importamos la clase teclado
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");//Importamos la clase raton y su objeto
        
        // 1.c Tarea Marca Samsung 
        Monitor monitorSamsung = new Monitor("Samsung", 27);
        Teclado tecladoLogitech = new Teclado("USB", "Logitech");
        Raton ratonGenius = new Raton("Cable", "Genius");
        
        
        // AARMAMOS LAS COMPUTADORAS (agregacion)
      
        // Aplicamos relacon de agregación: los componentes existen por si mismos
        // y se integran en el objeto Computadora.
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        
        // mezclamos marcas para la tercera PC
        Computadora computadorasVarias = new Computadora("Computadora Mix", monitorHP, tecladoGamer, ratonHP);
        
        //Tarea: Crear mas objetos de tipo computadora con todos sus elementos
        Computadora computadoraSamsung = new Computadora("Computadora Samsung", monitorSamsung, tecladoLogitech, ratonGenius);
      
        // 3. CARGA DE DATOS
    
        // 3.a. ORDEN 1: TEST DE LLENADO COMPLETO (RENDIMIENTO)
        // El arreglo alcanza su capacidad maxima(10) de forma íntegra.
        Orden orden1 = new Orden();// inicializamos el arreglo vacio
        //Agregamos 2 marcas de computadora 
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        
        //Tarea (Rendimiento): Completar una lista en el objeto orden1 que llegue a los 10 elementos
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadorasVarias);
        orden1.agregarComputadora(computadoraSamsung);
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadorasVarias);
        orden1.agregarComputadora(computadoraSamsung);
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadorasVarias);
     
        // 3.b. ORDEN 2: TEST DE CONSISTENCIA
        // Uso parcial del arreglo. Verifica que cada objeto Orden
        // mantiene su propio contador independiente.
        Orden orden2 = new Orden();
        //Agregamos  Computadora marca Varias y hp
        orden2.agregarComputadora(computadorasVarias);
        orden2.agregarComputadora(computadoraHP);
        
        // 3.c ORDEN 3: TEST DE DESBORDE ( si superamos el limite)
        // Se intenta superar el límite de 10 elementos.
        // Se valida la captura del error y el bloqueo de integridad de datos.
        //Verifica que cuando intentamos meter la nmero 11, 
        //el programa no explota, sino que el if/else captura el error y lo maneje
        //en este caso, bloqueando la impresión.
        Orden orden3 = new Orden();
        orden3.agregarComputadora(computadoraHP); // 1
        orden3.agregarComputadora(computadoraHP); // 2
        orden3.agregarComputadora(computadoraHP); // 3
        orden3.agregarComputadora(computadoraHP); // 4
        orden3.agregarComputadora(computadorasVarias); // 5
        orden3.agregarComputadora(computadorasVarias); // 6
        orden3.agregarComputadora(computadorasVarias); // 7
        orden3.agregarComputadora(computadoraSamsung); // 8
        orden3.agregarComputadora(computadoraSamsung); // 9
        orden3.agregarComputadora(computadoraGamer);   // 10
        
        // El ingreso número 11 debe disparar la alerta y marcar la orden como inválida.
        orden3.agregarComputadora(computadoraSamsung); // 11 (INTENTO DE DESBORDE)
        

        // 4. SALIDA DE DATOS Y RESULTADOS (por consola)

        //4.a. MOSTRAMOS LA ORDEN 1 (Rendimiento 10/10)
        // Resultado esperado: Listado completo y exitoso.
        System.out.println("\n****************************************");
        System.out.println("PRUEBA 1: RENDIMIENTO MÁXIMO (10/10)");
        orden1.mostrarOden();
        System.out.println("****************************************");

        // 4.b. MOSTRAMOS LA ORDEN 2 (Uso parcial 2/10)
        // Resultado esperado: Consistencia en el manejo de memoria.
        System.out.println("\n****************************************");
        System.out.println(" PRUEBA 2: CONSISTENCIA DE DATOS");
        orden2.mostrarOden();
        System.out.println("****************************************");

        // 4.c. MOSTRAMOS LA ORDEN 3 (Prueba de Desborde 11/10)
        // Resultado esperado: El sistema protege la salida y no imprime la orden corrupta.
        System.out.println("\n****************************************");
        System.out.println("PRUEBA 3: SEGURIDAD Y CONTROL DE ERRORES");
        orden3.mostrarOden();
        System.out.println("****************************************");
     
        }
}
