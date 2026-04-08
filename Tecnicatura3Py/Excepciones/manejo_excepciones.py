resultado = None
a = '10'
b = 0

try:
    resultado = a/b  # modificamos
except  ZeroDivisionError as e:
    print(f'Ocurrió un error: {e}')

print(f'el resultado es: {resultado}')
print(f'seguimos...')
