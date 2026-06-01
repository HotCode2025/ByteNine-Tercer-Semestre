from Tecnicatura3Py.Leccion04.BD.actualizar_registro import conexion
from Tecnicatura3Py.Leccion07.capa_datos_personas.Persona import Persona
from Tecnicatura3Py.Leccion07.capa_datos_personas.conexion import Conexion


class PersonaDAO:
    """
    DAO Significa: Data Access Object
    CRUD Significa:    Create -> insertar
                       Read -> seleccionar
                       Update -> actualizar
                       Delete -> eliminar
    """
    _SELECCIONAR = 'SELECT + FROM persona ORDER BY Id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre = %s, apellido = %s, email = %s WHERE Id_persona = %s'
    _ELIMINAR = 'DELETE FROM persona WHERE Id_persona = %s '

    # Definimos los métodos de clase
    @classmethod
    def seleccionar(cls):
        with Conexion.obtener_conexion():
            with Conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = [] #creamos una lista
                for registro in registros:
                    persona = Persona(registro[0], registro[1], registro[2], registro[3])
                    personas.append(persona)