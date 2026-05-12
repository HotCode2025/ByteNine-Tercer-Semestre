import psycopg2  as  bd #Esto es para poder conectarnos a Postgre

conexion = bd.connect(user="admin", password="admin", host="127.0.0.1", port="5432", database="test_db")
try:
    conexion.autocommit = False
    cursor = conexion.cursor()
    sentencia = ' INSERT INTO persona(nombre, apellido, email)VALUES(%s, %s, %s)'
    valores = ('Maria', 'Esparza', 'mesparza@mail.com')
    cursor.execute(sentencia, valores)
    print('Termina la transacción')


except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()