CREATE DATABASE SeguimientoDeProyectos;

USE SeguimientoDeProyectos;

CREATE TABLE Proyectos (
    ProyectoID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    FechaInicio DATE,
    FechaFin DATE,
    Estado VARCHAR(50)
);

