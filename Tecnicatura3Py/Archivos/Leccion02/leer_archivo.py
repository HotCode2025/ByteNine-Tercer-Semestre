#Diferentes formas de leer un archivo

#podemos tambien especificar la ruta del archivo donde queremso trabajar
#archivo = open('C:\\Users\\gabri\\OneDrive\\Escritorio\\ByteNine-Tercer-Semestre\\Tecnicatura3Py\\Archivos\\Leccion02\\prueba.txt', 'r', encoding="utf8")

archivo = open('prueba.txt','r', encoding="utf8") #Las letras son: "r" read, "a" append, "w" write, "x"

# print(archivo.read())

# print(archivo.read(15)) #Muestra las primeras 15 letras del archivo
# print(archivo.read(5)) #Continuamos desde la linea anterior

print(archivo.readline()) #Lee solo la primer linea
print(archivo.readline()) #Continuamos desde la linea anterior