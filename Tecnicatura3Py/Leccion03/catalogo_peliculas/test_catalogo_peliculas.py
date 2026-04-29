from Leccion03.catalogo_peliculas.Dominio import Pelicula
from Leccion03.catalogo_peliculas.catalogo_peliculas import CatalogoPeliculas

opcion = None

while opcion != 4:
    try:
        print("\n--- MENÚ DE OPCIONES ---")
        print("1) Agregar película")
        print("2) Listar películas")
        print("3) Eliminar archivo de películas")
        print("4) Salir")

        opcion = int(input("Elige una opción (1-4): "))

        if opcion == 1:
            nombre_peli = input("Introduce el nombre de la película: ")
            pelicula = Pelicula(nombre_peli)
            CatalogoPeliculas.agregar_pelicula(pelicula)
            print("Película guardada correctamente.")

        elif opcion == 2:
            CatalogoPeliculas.listar_peliculas()

        elif opcion == 3:
            CatalogoPeliculas.eliminar()

    except ValueError:
        print("Error: Por favor introduce un número válido.")
        opcion = None
    except Exception as e:
        print(f"Ocurrió un error inesperado: {e}")
        opcion = None

print("Programa finalizado. ¡Hasta luego!")