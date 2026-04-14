# Delaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8') # La w es de write significa escribir
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción\n')
    archivo.write("Las letras son:\nr read leer, \na append anexa, \nw write escribir, \nx crea un archivo")
    archivo.write("\nt esta es para texto o text, \nb archivo binarios, \nw+ leer y escribe son iguales r+\n")
    archivo.write('Con esto terminamos.')

except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() # con esto se debe cerrar el archivo

#archivo.write('Todo quedo perfecto'): este es un error