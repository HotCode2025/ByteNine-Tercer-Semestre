# Importamos la clase ManejoArchivos desde el módulo del mismo nombre
from ManejoArchivos import ManejoArchivos

# MANEJO DE CONTEXTO WITH: sintaxis simplificada, abre y cierra el archivo
# with open('prueba.txt', 'r', encoding='utf8') as archivo:
    # print(archivo.read())
    # No hace falta ni el try, ni el finally
    # en el contexto de with lo que se ejecuta de manera automática
    # Utiliza diferentes métodos: __enter__ este es el qie abre
    # Ahora el siguiente metodo es el que cierra: __exit__

# Usamos nuestra clase personalizada ManejoArchivos como context manager.
# Al entrar al bloque 'with':
#   1. Se llama a __enter__, que abre 'prueba.txt' y lo retorna
#   2. El archivo abierto queda disponible en la variable 'archivo'
with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())
# Al salir del bloque, __exit__ se ejecuta automáticamente y cierra el archivo

