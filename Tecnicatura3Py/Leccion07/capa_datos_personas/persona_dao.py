from Leccion04.BD.actualizar_registro import conexion
from Persona import Persona
from conexion import Conexion
from logger_base import log


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
                return personas

    @classmethod
    def insertar(cls, persona):
        with Conexion.obtener_conexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email)
                cursor.execute(cls._INSERTAR, valores)
                log.debug(f'Persona Insertada: {persona}')
                return cursor.rowcount

    @classmethod
    def actualizar(cls, persona):
        with Conexion.obtener_conexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f'Persona actualizada: {persona}')
                return cursor.rowcount


if __name__ == '__main__':
    # Actualizar un registro
    persona1 = Persona(1, 'Juan Jose', 'Pena', 'jjpena@gmail.com' )
    personas_actualizadas = PersonaDAO.actualizar(persona1)
    log.debug(f'Personas actualizadas: {personas_actualizadas}')

    # Insertar un registro
    # persona1 = Persona(nombre='Omero', apellido='Ramos', email='omeror@mail.com')
    # personas_insertadas = PersonaDAO.insertar(persona1)
    # log.debug(f'Personas insertadas: {personas_insertadas}')


    # Seleccionar objetos
    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)
