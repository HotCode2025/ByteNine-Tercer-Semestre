package domain;

public class Rectangulo extends FigurasGeometricas {

    // Constructor
    public Rectangulo(String tipoFigura) {
        super(tipoFigura);
    }

    @Override
    public void dibujar() { //Implementar el método
        System.out.println("Se imprime un: "+this.getClass().getSimpleName());
    }

}
