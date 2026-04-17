
package enumeraciones;

public enum Continentes {
    AFRICA(54, "4.800 millones" ),
    EUROPA(44, "740 millones"),
    ASIA(49, " 1.9 billones"),
    AMERICA(35, "1.000 millones"),
    OCEANIA(14, "46 millones");

    private final int paises;
    private String habitantes;
    
    //Atributos
    Continentes(int paises, String habitantes) {
        this.paises = paises;
        this.habitantes = habitantes;
    }
    
    // Metodos Get
    public int getPaises(){
        return this.paises;
        
    }

    public String getHabitantes(){
        return this.habitantes;
    }

    
}
