import psycopg2 #Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user="postgres", password="", host="127.0.0.1", port="5432", database="test_db")
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "SELECT * FROM persona"
            cursor.execute(sentencia) #De esta manera ejecutamso la sentencia
            registro = cursor.fetchall() #Recuperamos todos los registros que seran una lista
            print(registro)
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()

# https://www.psycopg.org/docs/usage.html


