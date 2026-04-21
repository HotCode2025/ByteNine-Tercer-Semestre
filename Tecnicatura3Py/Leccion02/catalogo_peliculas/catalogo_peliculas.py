# Importación
import os

# Defiinición de la clase
class CatalogoPeliculas:
    """Realizar las operaciones sobre el archivo de peliculas.txt."""

    # Atributo de clase
    ruta_archivo: str ="peliculas.txt"

    # Método Agregar_peliculas()
    @classmethod
    def agregar_pelicula(cls, pelicula):

        with open(cls.ruta_archivo, "a", encoding="utf-8") as archivo:
            archivo.write(str(pelicula) + "\n")

        print(f' Película "{pelicula}" agregada correctamente.')

    # Método listar_peliculas()
    @classmethod
    def listar_peliculas(cls):
        try:
            with open(cls.ruta_archivo, "r", encoding="utf-8") as archivo:
                lineas =[l.strip() for l in archivo.readlines() if l.strip()]

            if not lineas:
                print(" No hay películas en el catálogo. ")
            else:
                # '<5' alinea el número a la izquierda en 5 caracteres
                print(f"\n {'N°':<5} {'Título'}")
                print(" " + "-" * 35)

                for i, titulo in enumerate(lineas, 1):
                    print(f" {i:<5} {titulo}")

        except FileNotFoundError:
            # el archivo no existe: se informa sin interrrupir el programa
            print(" El catálogo aún no existe. Agregue una película primero.")

    # Método elimimar()
    @classmethod
    def eliminar(cls):
        try:
            os.remove(cls.ruta_archivo)
            print(" Archivo de películas eliminado correctamente.")

        except FileNotFoundError:
            print(" el archivo no existe, no hay nada que eliminar. ")


