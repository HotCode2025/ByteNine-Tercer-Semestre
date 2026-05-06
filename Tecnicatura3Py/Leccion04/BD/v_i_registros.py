import psycopg2 #Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user="postgres", password="46326123Gabi", host="127.0.0.1", port="5432", database="test_db")
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s )' # Placeholder
            valores = (
                ('Carlos', 'Lara', 'clara@mail.com'),
                ("Marcos", "Canto", "mcanto@gmail.com"),
                ("Marcelo", "Cuenca", "cuencaM@gmail.com")
            ) # Esto es una Tupla de Tuplas.
            cursor.executemany(sentencia, valores) #De esta manera ejecutamso la sentencia
            #conexion.commit()# No lo utilizamos para guardar cambios en la base de datos porque el whith lo hace automaticamente
            registros_insertados = cursor.rowcount
            print(f'Los registros insertadaos son: {registros_insertados}')


except Exception as e:
    print(f'Ocurrió un error: {e}') 
finally:
    conexion.close()