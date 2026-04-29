--
-- PostgreSQL database dump
--

\restrict D67s7WeGg1uQGSLdLTkumeK909YMr3NYr4qBuBC6mV9aVpC1zmBXG2X1DgvFcRF

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-04-29 19:39:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 41049)
-- Name: persona; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.persona (
    id_persona integer NOT NULL,
    nombre character varying,
    apellido character varying,
    email character varying
);


--
-- TOC entry 219 (class 1259 OID 41048)
-- Name: persona_id_persona_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.persona_id_persona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 5013 (class 0 OID 0)
-- Dependencies: 219
-- Name: persona_id_persona_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.persona_id_persona_seq OWNED BY public.persona.id_persona;


--
-- TOC entry 4856 (class 2604 OID 41052)
-- Name: persona id_persona; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.persona ALTER COLUMN id_persona SET DEFAULT nextval('public.persona_id_persona_seq'::regclass);


--
-- TOC entry 5007 (class 0 OID 41049)
-- Dependencies: 220
-- Data for Name: persona; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.persona VALUES (1, 'Carla', 'Gomez', 'kgomez@mail.com');
INSERT INTO public.persona VALUES (2, 'Juan', 'Perez', 'jperez@mail.com');


--
-- TOC entry 5014 (class 0 OID 0)
-- Dependencies: 219
-- Name: persona_id_persona_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.persona_id_persona_seq', 3, true);


--
-- TOC entry 4858 (class 2606 OID 41057)
-- Name: persona persona_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.persona
    ADD CONSTRAINT persona_pk PRIMARY KEY (id_persona);


-- Completed on 2026-04-29 19:39:37

--
-- PostgreSQL database dump complete
--

\unrestrict D67s7WeGg1uQGSLdLTkumeK909YMr3NYr4qBuBC6mV9aVpC1zmBXG2X1DgvFcRF

