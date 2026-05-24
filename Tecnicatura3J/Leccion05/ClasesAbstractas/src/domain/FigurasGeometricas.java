package domain;

public abstract class FigurasGeometricas {

    protected String tipoFigura;

    protected FigurasGeometricas(String tipoFigura) { // Constructor tipo protected con el atributo tipoFigura
        this.tipoFigura = tipoFigura; // Instanciar
    }

    // Método abstracto (sin argumentos) 
    public abstract void dibujar();

    // Agregamos el get y set
    public String getTipoFigura() {
        return tipoFigura;
    }

    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }

    @Override
    public String toString() {
        return "FigurasGeometricas{" + "tipoFigura=" + tipoFigura + '}';
    }

}
