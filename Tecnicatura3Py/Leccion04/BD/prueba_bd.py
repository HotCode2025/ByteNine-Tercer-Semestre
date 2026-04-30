import psycopg2 #Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(
    user="postgres",
    password="46326123Gabi",
    host="127.0.0.1",
    port="5432",
    database="test_db"
)

cursor = conexion.cursor()
sentencia = "SELECT * FROM persona"
cursor.execute(sentencia) #De esta manera ejecutamso la sentencia
registro = cursor.fetchall() #Recuperamos todos los registros que seran una lista
print(registro)

cursor.close()
conexion.close()