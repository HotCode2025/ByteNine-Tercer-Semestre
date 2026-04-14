# Clase que implementa el protocolo de administrador de contexto (context manager)
# para el manejo seguro de archivos usando la sentencia 'with'
class ManejoArchivos:

    # Constructor: recibe el nombre/ruta del archivo que se va a manejar
    def __init__(self, nombre):
        self.nombre = nombre # Guardamos el nombre del archivo como atributo

    # Método especial que se ejecuta automáticamente al ENTRAR al bloque 'with'
    # Es el encargado de ABRIR el recurso (archivo)
    def __enter__(self):
        print('Obtenemos el recurso'.center(50, '-'))

        # Abrimos el archivo en modo lectura ('r') con codificación UTF-8
        # y reemplazamos self.nombre (string) por el objeto archivo abierto
        self.nombre = open(self.nombre, 'r', encoding='utf8') # Encapsulamos el código dentro del método

        # Retornamos el archivo abierto para que esté disponible
        # en la variable del 'with' (ej: 'as archivo')
        return self.nombre

    # Método especial que se ejecuta automáticamente al SALIR del bloque 'with'
    # Se llama siempre, haya ocurrido una excepción o no
    # Recibe información sobre la excepción (si hubo alguna):
    #   - tipo_exception: tipo de la excepción (ej: ValueError)
    #   - valor_exception: mensaje o valor de la excepción
    #   - traza_error: traceback con la pila de llamadas
    def __exit__(self, tipo_exception, valor_exception, traza_error):
        print('cerramos el recurso'.center(50, '-'))

        # Verificamos que el archivo esté abierto antes de cerrarlo
        if self.nombre:
            self.nombre.close() # Liberamos el recurso cerrando el archivo




