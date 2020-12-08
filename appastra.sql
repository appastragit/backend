DROP DATABASE appastra;
CREATE DATABASE appastra;
USE appastra;

CREATE TABLE Usuarios (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    pass VARCHAR(50),
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    d_pais VARCHAR(255) NOT NULL,
    d_provincia VARCHAR(255) NOT NULL,
    d_localidad VARCHAR(255) NOT NULL,
    d_cp VARCHAR(255) NOT NULL,
    d_calle VARCHAR(255) NOT NULL,  
    d_numero VARCHAR(255) NOT NULL,
    d_piso VARCHAR(255),
    d_puerta VARCHAR(255),
    rol VARCHAR(255) NOT NULL COMMENT 'alumno, profesor, admin',
    avatar VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL
);

CREATE TABLE Clases (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    id_profesor VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    tema VARCHAR(255) NOT NULL
);

CREATE TABLE Asistentes (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    id_usuario VARCHAR(255) NOT NULL,
    id_clase VARCHAR(255) NOT NULL
);

CREATE TABLE Unidades (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    id_clase VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL
);

CREATE TABLE Eventos (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    id_clase VARCHAR(255) NOT NULL,
    id_unidad VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL COMMENT 'tarea o temario'
);

CREATE TABLE Tareas (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    id_evento VARCHAR(255) NOT NULL,
    id_usuario VARCHAR(255) NOT NULL,
    fecha_creacion DATE NOT NULL,
    fecha_fin DATE,
    fecha_entrega VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    enunciado TEXT NOT NULL,
    calificacion VARCHAR(255),
    estado VARCHAR(255) NOT NULL COMMENT 'entregado, no entregado'
);

CREATE TABLE Temarios (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    id_evento VARCHAR(255) NOT NULL,
    fecha_creacion DATE NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    estado VARCHAR(255) COMMENT 'visible, no visible'
);

CREATE TABLE Archivos (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    id_evento VARCHAR(255) NOT NULL,
    id_usuario VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL COMMENT 'enunciado o entrega',
    archivo VARCHAR(255) NOT NULL
);
