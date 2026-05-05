import psycopg2 #Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user="admin", password="admin", host="127.0.0.1", port="5432", database="test_db")
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "SELECT * FROM persona WHERE id_persona = %s" # Placeholder
            id_persona = input('Digite un número para el id_persona: ')
            cursor.execute(sentencia, (id_persona,)) #De esta manera ejecutamso la sentencia
            registro = cursor.fetchone() #Recuperamos todos los registros que seran una lista
            print(registro)
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()

# https://www.psycopg.org/docs/usage.html


