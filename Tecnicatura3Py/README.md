 
# 🐍 PROGRAMACIÓN EN PYTHON - ByteNine Tercer Semestre
---
<p align="left">
  <img src="https://img.shields.io/badge/Python-3.13-blue?style=for-the-badge&logo=python" alt="Python Version">
  <img src="https://img.shields.io/badge/IDE-PyCharm-black?style=for-the-badge&logo=pycharm" alt="PyCharm">
  <img src="https://img.shields.io/badge/Database-PostgreSQL-336791?style=for-the-badge&logo=postgresql" alt="PostgreSQL">
</p>

---
## 👥 Integrantes del Equipo
 
La siguiente lista contiene los perfiles de GitHub de los desarrolladores:
 
*  [Agustin Santarena](https://github.com/AgusSantarena)
*  [Gabriel Santarena](https://github.com/GabrielSantarena)
*  [Santiago Martin](https://github.com/santy171004)
*  [Nahuel Spikerman](https://github.com/nawe2)
*  [Gustavo Rodriguez](https://github.com/GustavoRodriguez79)
---
 
## 💻 HERRAMIENTAS PRINCIPALES (Requeridas)
 
La siguiente tabla resume las herramientas obligatorias para el desarrollo y la colaboración.
 
| Icono | Herramienta | Versión Requerida | Link de Descarga / Instalación |
| :---: | :--- | :--- | :--- |
| 🐍 | **Python** | 3.13 o superior | [Descarga Python](https://www.python.org/downloads/) |
| 💻 | **PyCharm Community Edition** | 2025.2.1.1 o superior | [Página Oficial de Descarga](https://www.jetbrains.com/pycharm/download/) |
| 📝 | **Visual Studio Code** (Alternativo) | Última versión | [Descarga VSCode](https://code.visualstudio.com/) |
| 🐙 | **GitHub Desktop** | Última versión | [Descarga e Instrucciones](https://desktop.github.com/) |
 
---
 
 
## 📚 CONTENIDO DE LAS CLASES (Tabla de Temas)
 
La siguiente tabla resume el contenido cubierto en cada clase hasta la fecha (**se actualizará cada semana**), detallando la fecha y el tema principal desarrollado.
 
| Clase | Fecha | Tema Principal | Lección en Repositorio |
| :---: | :---: | :--- | :--- |
| **1** | 06-04 | Excepciones: Manejo de errores y clases personalizadas | Lección 1 |
| **2** | 13-04 | Manejo de Archivos de texto en Python | Lección 2 |
| **3** | 20-04 | Proyecto: Catálogo de Películas | Lección 3 |
| **4** | 27-04 | PostgreSQL y Python: Instalación y conexión | Lección 4 |
| **5** | 04-05 | Registros con PostgreSQL y Python (CRUD) | Lección 5 |
| **6** | 11-05 | Transacciones en PostgreSQL y Python | Lección 6 |
| **7A** | 18-05 | Capa de Datos: Logging y PostgreSQL Parte 1 | Lección 7 |
| **7B** | 18-05 | Capa de Datos: Logging y PostgreSQL Parte 2 | Lección 7 |
| **8** | 01-06 | Capa de Datos: PersonaDAO - método seleccionar | Lección 8 |
| **9A** | 08-06 | Pool de conexiones con PostgreSQL Parte 1 | Lección 9 |
| **9B** | 08-06 | Pool de conexiones con PostgreSQL Parte 2 | Lección 9 |
 
---
 
## 📖 DETALLE DE CONTENIDO Y PUNTOS DE DESARROLLO
 
Este listado detalla los puntos específicos cubiertos y desarrollados en cada clase.
 
---
 
## CLASE 1: Excepciones
**Fecha:** Lunes, 6 de abril de 2026  
 
### Jerarquía de Excepciones en Python
 
> El diagrama muestra la jerarquía de clases de excepciones en Python, partiendo desde `BaseException` → `Exception`, y sus subclases más comunes: `ArithmeticError` (`ZeroDivisionError`), `OSError` (`FileNotFoundError`, `PermissionError`), `RuntimeError`, `LookupError` (`IndexError`, `KeyError`), y `SyntaxError` (`IndentationError`).
 
- 1.1 Manejo de errores o excepciones Parte 1 y Parte 2
- 1.2 Procesamiento de excepciones
- 1.3 Procesar clases de exception más específicas
- 1.4 Más procedimientos de excepciones
- 1.5 Bloques `else` y `finally` al manejar excepciones
- 1.6 Creación de clases de Exception personalizadas
---
 
## CLASE 2: Manejo de Archivos
**Fecha:** Lunes, 13 de abril de 2026  
 
> En Python podemos manejar archivos de tipo texto (`.txt`) y archivos binarios (fotos, audio, video, etc.). En esta clase se trabaja con archivos de tipo texto.
 
- 1.1 Introducción al manejo de archivos
- 1.2 Especificar el juego de caracteres de un archivo de texto
- 1.3 Lectura de archivos
```python
  archivo = open('prueba.txt', 'r', encoding='utf8')
  print(archivo.read())
```
- 1.4 Más formas de trabajar con archivos
- 1.5 Uso de `with`, archivos y Context Manager Parte 1
- 1.6 Uso de `with`, archivos y Context Manager Parte 2
---
 
## CLASE 3: Proyecto Catálogo de Películas
**Fecha:** Lunes, 20 de abril de 2026  
 
### Diagrama de Clases UML
 
> El diagrama muestra dos paquetes: `dominio` con la clase `Pelicula` (atributo `-nombre: str`, método `+__str__()`) y `servicio` con la clase `CatalogoPeliculas` (atributo estático `+ruta_archivo: str`, métodos estáticos `agregar_pelicula()`, `listar_peliculas()` y `eliminar()`). Ambas clases se relacionan mediante `«agrega»`. El archivo `test_catalogo_peliculas.py` implementa un menú con 4 opciones: Agregar película, Listar películas, Eliminar archivo de películas y Salir.
 
- 1.1 Presentación del proyecto y Diagrama de clase UML
- 1.2 Creación de la clase: `Película`
- 1.3 Creación de la clase: `catalogo_peliculas`
- 1.4 Creación de: `test_catalogo_peliculas`
- 1.5 Pruebas ingresando las otras clases, Parte 1
- 1.6 Pruebas ingresando las otras clases, Parte 2
---
 
## CLASE 4: PostgreSQL y Python
**Fecha:** Lunes, 27 de abril de 2026  
 
- 1.1 Instalación de PostgreSQL en Windows (investigar instalación en otros sistemas operativos)
- 1.2 Creación de una base de datos llamada `prueba_bd` y carga de una tabla con sus columnas
- 1.3 Consultas con código Query en PostgreSQL Parte 1
- 1.4 Consultas con código Query en PostgreSQL Parte 2
- 1.5 Instalación del módulo PostgreSQL en PyCharm
- 1.6 Conexión hacia la base de datos en Python con el método `fetchall()`
- 1.7 Cierre de la conexión y la consulta
- 1.8 Lectura recomendada: [Ciberseguridad para programadores](https://achirou.com/el-camino-del-hacker-ruta-para-una-carrera-exitosa-en-hacking/)
- 1.9 Video recomendado: [¿Qué nube escoger? AWS, GCP o Azure](https://www.youtube.com/live/DLtTfxQy3Oo)
---
 
## CLASE 5: Registros con PostgreSQL y Python
**Fecha:** Lunes, 4 de mayo de 2026  
 
- 5.1 Uso de `with` y `psycopg2`
- 5.2 Función `fetchone` en psycopg2
- 5.3 Función `fetchall` en psycopg2 Parte 1 y Parte 2
- 5.4 Insertar un registro con psycopg2
- 5.5 Insertar varios registros
- 5.6 Actualizar o modificar un registro
- 5.7 Actualizar o modificar varios registros
- 5.8 Eliminar un registro
- 5.9 Eliminar varios registros
---
 
## CLASE 6: Transacciones en PostgreSQL y Python
**Fecha:** Lunes, 11 de mayo de 2026  
 
- 6.1 Corrección de mensajes de error en Postgres Parte 1 y Parte 2
- 6.2 Manejo de transacciones (Manualmente) Parte 1, 2, 3 y 4
- 6.3 Manejo de transacciones con `with` (Automáticamente)
- 📺 Video recomendado: ["Crea una APP con PYTHON y CHATGPT desde cero"](https://www.youtube.com/watch?v=b8COygWdvmw)
---
 
## CLASE 7-A: Capa de Datos - Logging y PostgreSQL Parte 1
**Fecha:** Lunes, 18 de mayo de 2026  
 
- 7.1 Explicación con el Diagrama de clase UML
  > **Tarea:** Realizar el diagrama UML correspondiente.
- 7.2 Manejo de logging Parte 1
  > 📄 Referencia: [Documentación oficial de logging](https://docs.python.org/3/library/logging.html)
- 7.3 Manejo de logging Parte 2
---
 
## CLASE 7-B: Capa de Datos - Logging y PostgreSQL Parte 2
**Fecha:** Lunes, 18 de mayo de 2026  
 
- 8.1 Creación de la Clase `Persona`
- 8.2 Prueba de la Clase `Persona`
- 8.3 Creación de la Clase `Conexion` Parte 1, 2 y 3
- 8.4 Comienzo de la creación de la Clase `PersonaDAO`
  > **Próxima clase:** Se incorporarán los métodos `SELECCIONAR`, `INSERTAR`, `ACTUALIZAR` y `ELIMINAR` a la clase `PersonaDAO`.
- 📺 Video recomendado: [CRUD con Django, en IDE Pycharm y Base de datos Postgress](https://www.youtube.com/watch?v=uMF7rcTKMHM)

---
 
## CLASE 8: Capa de Datos - PersonaDAO Parte 3
**Fecha:** Lunes, 1 de junio de 2026
 
### Diagrama: Paquete acceso_datos
 
> El diagrama muestra el paquete `acceso_datos` con tres clases. La clase `Conexion` administra los datos de acceso a la base (`DATABASE`, `USERNAME`, `PASSWORD`, `DB_PORT`, `HOST`, `conexion`, `cursor`) y expone los métodos estáticos `obtenerConexion()`, `obtenerCursor()` y `cerrar()`. La clase `Persona` representa la entidad con atributos `id_persona`, `nombre`, `apellido` y `email`, junto con su método `__str__()` y los getters/setters correspondientes. Por último, `PersonaDAO` se compone de `Conexion` y opera sobre objetos `Persona`, definiendo los métodos `seleccionar()`, `insertar()`, `actualizar()` y `eliminar()`, encargados de realizar las operaciones sobre la base de datos para la entidad Persona.
 
- 9.1 En la clase `PersonaDAO`: método `seleccionar`
- 9.2 Prueba del método `seleccionar`
- 9.3 Método `Insertar`
- 9.4 Método `Actualizar`
- 9.5 Método `Eliminar`
- 9.6 Haciendo pruebas y eliminando errores
---
 
## CLASE 9-A: Pool de Conexiones con Python y PostgreSQL Parte 1
**Fecha:** Lunes, 8 de junio de 2026, 18:00 hs
 
### Diagrama: Pool de Conexiones
 
> El diagrama ilustra el concepto de Connection Pool con Psycopg2: un conjunto fijo de conexiones (instancias de conexión) se mantiene disponible para ser repartido entre distintos clientes. Cuando un cliente solicita una conexión, el Pool le asigna una conexión libre; cuando el cliente termina, la conexión vuelve al Pool para ser reutilizada por otro cliente, evitando así abrir y cerrar conexiones contra PostgreSQL constantemente.
 
- 10.1 Pool de conexiones con Python y PostgreSQL: Parte 1 y 2
- 10.2 Obtener una conexión a partir del Pool: Parte 1 y 2
- 10.3 Pruebas creando objetos del Pool de conexiones
> 💡 *"Un programador se forma con la práctica."*
> 📺 Video recomendado: [Curso Completo de C++ para Principiantes (2023)](https://www.youtube.com/watch?v=VQo6gj7-hw8)
 
---
 
## CLASE 9-B: Pool de Conexiones con Python y PostgreSQL Parte 2
**Fecha:** Lunes, 8 de junio de 2026
 
### Diagrama: Pool de Conexiones (continuación)
 
> Se retoma el mismo diagrama del Pool de Conexiones de la clase anterior. En esta parte se completa la implementación: el método `liberarConexion()` es el encargado de devolver una conexión usada al Pool (como se ve en el diagrama, donde una conexión liberada queda disponible para el "Cliente #3"), mientras que `cerrarConexiones()` cierra todas las conexiones del Pool al finalizar. Además, se construye la clase `CursorDelPool`, que obtiene una conexión del Pool, ejecuta las operaciones mediante un cursor y, al terminar, libera automáticamente la conexión de vuelta hacia el Pool.
 
- 11.1 Método `liberarConexion()`
- 11.2 Método `cerrarConexiones()`
- 11.3 Creamos la Clase `CursorDelPool` - Parte 1 y 2
- 11.4 Pruebas del `CursorDelPool` - Parte 1 y 2
- 11.5 Pruebas de `PersonaDAO` - Parte 1 y 2
---
 
## 🎯 CONSEJOS Y BUENAS PRÁCTICAS
 
1. **PEP 8:** Sigue siempre el estándar de estilo de código Python ([PEP 8](https://pep8.org/)).
2. **Comentarios:** Comenta tu código de manera clara y concisa.
3. **Nombres Descriptivos:** Usa nombres de variables y funciones que describan su propósito.
4. **Testing:** Prueba tu código antes de hacer commit.
5. **Entorno Virtual:** Siempre activa tu entorno virtual antes de trabajar.
6. **Requirements:** Si instalas nuevas librerías, actualiza `requirements.txt` con `pip freeze > requirements.txt`.
---
 
## 📝 NOTAS FINALES
 
* **Consultas:** Utilizar el tablero de Issues de GitHub para dudas o problemas técnicos.
* **Colaboración:** Respeta el flujo de trabajo secuencial y las ramas asignadas.
---
 
**Última actualización:** Junio 2026  
 
---
 
## 🔗 ENLACES ÚTILES
 
* [Documentación Oficial de Python](https://docs.python.org/3/)
* [PEP 8 - Style Guide](https://pep8.org/)
* [Real Python - Tutoriales](https://realpython.com/)
* [GitHub Docs](https://docs.github.com/)
* [Documentación de psycopg2](https://www.psycopg.org/docs/)
* [Documentación de PostgreSQL](https://www.postgresql.org/docs/)
* [Módulo logging de Python](https://docs.python.org/3/library/logging.html)
---
 