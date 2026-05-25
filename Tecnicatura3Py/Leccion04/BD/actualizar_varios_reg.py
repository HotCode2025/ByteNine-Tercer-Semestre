import psycopg2 #Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user="postgres", password="Marcos0146", host="127.0.0.1", port="5432", database="test_db")
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s' # Placeholder
            valores = (
                ('Juan', 'Perez', 'jperez@mail.com', 4),
                ('Romina', 'Ayala','ayalar@mail.com', 5)
            ) # Esto es una Tupla de Tuplas.
            cursor.executemany(sentencia, valores) #De esta manera ejecutamso la sentencia
            #conexion.commit()# No lo utilizamos para guardar cambios en la base de datos porque el whith lo hace automaticamente
            registros_actualizado = cursor.rowcount
            print(f'Los registros insertadaos son: {registros_actualizado}')


except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()