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

INSERT INTO proyectos (Nombre, Descripcion, FechaInicio, FechaFin, Estado) VALUES
('Proyecto A', 'Descripción del Proyecto A', '2023-01-01', '2023-12-31', 'En Progreso'),
('Proyecto B', 'Descripción del Proyecto B', '2023-02-01', '2023-11-30', 'Planificado'),
('Proyecto C', 'Descripción del Proyecto C', '2023-03-01', '2023-10-31', 'Completado');