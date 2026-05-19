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