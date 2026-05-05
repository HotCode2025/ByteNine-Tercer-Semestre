-- INFO PARA EL EQUIPO:
-- Si al ejecutar este script les da error de "rol" o "permisos", 
-- primero abran una ventana nueva de consulta y ejecuten este comando:
-- CREATE ROLE admin WITH SUPERUSER LOGIN PASSWORD 'admin';
-- Después, vuelvan a ejecutar este script normalmente.

-- 1. Crear tabla
CREATE TABLE public.persona (
    id_persona integer NOT NULL,
    nombre character varying,
    apellido character varying,
    email character varying
);

-- 2. Crear secuencia para ID
CREATE SEQUENCE public.persona_id_persona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.persona_id_persona_seq OWNED BY public.persona.id_persona;

ALTER TABLE ONLY public.persona ALTER COLUMN id_persona SET DEFAULT nextval('public.persona_id_persona_seq'::regclass);

-- 3. Insertar datos
INSERT INTO public.persona VALUES (1, 'Carla', 'Gomez', 'kgomez@mail.com');
INSERT INTO public.persona VALUES (2, 'Juan', 'Perez', 'jperez@mail.com');

-- 4. Ajustar contador
SELECT pg_catalog.setval('public.persona_id_persona_seq', 5, true);

-- 5. Crear llave primaria
ALTER TABLE ONLY public.persona
    ADD CONSTRAINT persona_pk PRIMARY KEY (id_persona);