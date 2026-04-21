class Pelicula:

    def __init__(self, nombre: str):  # Inicializamos la instancia Pelicula
        self.nombre = nombre

    def __str__(self):
        return self.nombre