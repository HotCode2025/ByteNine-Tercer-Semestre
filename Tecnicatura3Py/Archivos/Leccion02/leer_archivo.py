#Diferentes formas de leer un archivo

#podemos tambien especificar la ruta del archivo donde queremso trabajar
#archivo = open('C:\\Users\\gabri\\OneDrive\\Escritorio\\ByteNine-Tercer-Semestre\\Tecnicatura3Py\\Archivos\\Leccion02\\prueba.txt', 'r', encoding="utf8")

archivo = open('prueba.txt','r', encoding="utf8") #Las letras son: "r" read, "a" append, "w" write, "x"

# print(archivo.read())
# print(archivo.read(15)) #Muestra las primeras 15 letras del archivo
# print(archivo.read(5)) #Continuamos desde la linea anterior
#print(archivo.readline()) #Lee solo la primer linea
#print(archivo.readline()) #Continuamos desde la linea anterior

# 1.4 Mas formas de trabajar con archivos
# Vamos a iterar el archivo, cada una de las lineas
# for linea in archivo:
    # print(linea): Iteramos todos  los elementos del archivo
# print(archivo.readline()[11]) # Accedemos al archivo si fuera una lista

# Anexamos informacion, copiamos a otro
archivo2 = open('copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close()# Cerramos el primer archivo
archivo2.close() #cerramos el sewgundo archivo

print(' Se ha terminado el proceso de leer y copiar archivos')