# PROGRAMACION EN PYTHON: ByteNine-Tercer-Semestre
 
Este repositorio es parte de la organización **HotCode-2025** y fue creado por el equipo **ByteNine**. Su propósito es almacenar los ejercicios y proyectos del Lenguaje **Python**, diseñados para ser trabajados en el IDE **PyCharm Community Edition** o **Visual Studio Code**, gestionados con **virtualenv** y **Python 3.13**.
 
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
 
### REGLA CLAVE: Entorno Virtual (virtualenv)
 
Para mantener la consistencia entre colaboradores y evitar conflictos de dependencias, es fundamental trabajar con un entorno virtual.
 
| Elemento | Descripción | ¿DEBE Subirse (Commit/Push)? | ¿Por qué? |
| :--- | :--- | :--- | :--- |
| **`venv/`** | Entorno virtual de Python | **NO** | Está ignorado por `.gitignore`. Cada colaborador crea su propio entorno. |
| **`requirements.txt`** | Archivo de dependencias | **SÍ** | **Permite instalar las mismas librerías en todos los entornos.** |
| **`__pycache__/`** | Archivos compilados de Python | **NO** | Está ignorado por `.gitignore` (archivos temporales). |
| **`.idea/`** | Configuración de PyCharm | **NO** | Está ignorado por `.gitignore` (configuraciones personales). |
| **Archivos `.py`** | Código fuente Python | **SÍ** | **El código debe estar disponible para todos.** |
 
**Advertencia:** Asegúrate de activar tu entorno virtual antes de trabajar. En Windows: `venv\Scripts\activate`, en Mac/Linux: `source venv/bin/activate`.
 
---
 
## INSTRUCCIONES DE EJECUCIÓN
 
Para ejecutar correctamente los proyectos de Python, siga estos pasos:
 
1. **Requisitos:** Asegúrese de tener instalado **Python 3.13+** y **PyCharm** o **VSCode**.
2. **Clonar:** Clone este repositorio.
3. **Crear Entorno Virtual:**
   ```bash
   cd Python
   python -m venv venv
   ```
4. **Activar Entorno Virtual:**
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`
5. **Instalar Dependencias:**
   ```bash
   pip install -r requirements.txt
   ```
6. **Abrir Proyecto:** En PyCharm, seleccione **`File > Open`** y navegue hasta la carpeta `/Python/`.
7. **Ejecutar:** Abra cualquier archivo `.py` en la lección correspondiente (ejemplo: `/Python/Leccion1/`) y ejecute presionando **Shift+F10** (PyCharm) o el botón de play.
   * Todo el código final está asegurado en la rama **`main`** para revisión.
---
 
## ⚠️ REGLAS FUNDAMENTALES PARA LA COLABORACIÓN
 
Herramientas Clave: PyCharm/VSCode y GitHub Desktop.
 
1. **Sincronización (Pull) Obligatoria:**
   * **Siempre** haz clic en **"Fetch Origin"** y luego en **"Pull Origin"** en GitHub Desktop antes de comenzar cualquier tarea o escribir código.
   * **Rama de Trabajo:** Asegúrate de estar en la rama **`Corrección-Repo`**.
2. **Commit y Push Consistentes:**
   * Una vez que finalices y pruebes tu tarea, escribe un mensaje descriptivo, haz **`Commit`** y luego **"Push Origin"** a la rama **`Corrección-Repo`**.
3. **Gestión del `.gitignore` (Prohibido Modificar):**
   * **Prohibido** modificar o eliminar entradas del archivo **`.gitignore`** sin consenso de todos los miembros del equipo ByteNine.
---
 
## 🛠️ FLUJO DE TRABAJO ESPECÍFICO PARA LENGUAJE PYTHON
 
### Flujo de Ramas y Roles
 
* **Rama de Desarrollo Activa:** **`Corrección-Repo`**. Toda la actividad de clases debe ocurrir únicamente aquí.
* **Rama Principal (Estable):** **`main`**. Contiene solo código estable y final.
* **Encargado de la Fusión a `main`:** **Solo el *Owner*** Agustín Santarena → Owner ([@AgusSantarena](https://github.com/AgusSantarena)) tiene permiso para fusionar (`merge`) los cambios de `Corrección-Repo` hacia la rama `main`.


### Designación y Concurrencia de Actividades
 
El flujo es **secuencial** para evitar conflictos.
 
1. **Asignación de Tareas:**
   * Las tareas se asignarán mediante un **sorteo**.
   * **Prioridad:** El trabajo en clases (Ejercicios o Tareas) con **fecha de entrega el mismo día antes de las 23:00 hs.** es prioritario.
2. **Gestión de la Concurrencia (Trabajo Secuencial):**
   * **No iniciar, modificar o interrumpir** el trabajo de otro desarrollador.
   * El flujo es estrictamente **secuencial**: Un desarrollador comienza y finaliza su tarea. **Solo después de la revisión y aprobación** se informará al siguiente compañero que puede comenzar.
### Proceso de Revisión (GitHub Issues y Pull Requests)
 
1. **Registro y Asignación:** Usaremos el **tablero Scrum (Projects/Issues)** de GitHub.
2. **Revisión de Código (Pull Request):** Al finalizar tu tarea, abre un **Pull Request** hacia la rama `Corrección-Repo`.
3. **Aprobación/Rechazo:**
   * El Revisor gestionará el desempeño.
   * Si hay errores, el Revisor notificará al compañero desarrollador, quien deberá **corregir el error**, subir los nuevos cambios y solicitar una nueva revisión.
---
 
## 🏗️ ESTRUCTURA DEL REPOSITORIO Y CONVENCIONES
 
La estructura del proyecto es clave para la organización de las lecciones.
 
### Estructura de Carpetas
 
La estructura debe seguir este patrón a partir de la carpeta raíz del repositorio:
 
```
/ByteNine-Tercer-Semestre
└── /Python
    ├── venv/                          # NO subir (ignorado)
    ├── requirements.txt               # SÍ subir
    └── /Leccion[Número]              # Carpeta de cada lección
        ├── archivo_ejercicio_01.py
        ├── archivo_ejercicio_02.py
        └── README.md (opcional)
```
 
### Contenido por Lección (Convenciones de Nombres)
 
Se debe respetar la convención de nombres (la creación será rotativa).
 
* **Carpeta de Lección:** `Leccion[Número]` (ejemplo: `Leccion1`, `Leccion2`).
* **Nombre de Archivos:** Descriptivo y en minúsculas con guiones bajos (ejemplo: `manejo_excepciones_01.py`, `conexion_postgresql.py`).
* **Clases y Funciones:** Seguir [PEP 8](https://pep8.org/) - Clases en `PascalCase`, funciones en `snake_case`.
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
**Clase en Vivo:** [YouTube](#)
 
> **Proyecto integrador:** Crear el proyecto con Diagrama de clase UML. Fecha de entrega: antes de las 23:00 hs del mismo día (entrega hasta las 00:00 hs del miércoles con nota reducida).
 
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
- 📺 Video recomendado: [Ver video](https://www.youtube.com/watch?v=b8COygWdvmw)
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
**Clase en Vivo:** [YouTube](#)
 
- 8.1 Creación de la Clase `Persona`
- 8.2 Prueba de la Clase `Persona`
- 8.3 Creación de la Clase `Conexion` Parte 1, 2 y 3
- 8.4 Comienzo de la creación de la Clase `PersonaDAO`
  > **Próxima clase:** Se incorporarán los métodos `SELECCIONAR`, `INSERTAR`, `ACTUALIZAR` y `ELIMINAR` a la clase `PersonaDAO`.
- 📺 Video recomendado: [Ver video](https://www.youtube.com/watch?v=uMF7rcTKMHM)
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
 
**Última actualización:** Mayo 2026  

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
 
*Este README es un documento vivo y se actualizará conforme avance el curso.*
 
