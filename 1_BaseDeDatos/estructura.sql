-- 1. Creamos la base de datos para el control de logística
CREATE DATABASE SistemaLogisticaDB;
USE SistemaLogisticaDB;

-- 2. Creamos la tabla donde se guardan los contenedores
CREATE TABLE Embarques (
    Id_Embarque VARCHAR(10) PRIMARY KEY,
    Destino VARCHAR(50) NOT NULL,
    Peso_Toneladas DECIMAL(5,2) NOT NULL,
    Estado VARCHAR(20) DEFAULT 'Pendiente'
);

-- 3. Dejamos listos unos registros de prueba
INSERT INTO Embarques (Id_Embarque, Destino, Peso_Toneladas, Estado) 
VALUES 
('EMB-001', 'Cortés', 18.50, 'Completado'),
('EMB-002', 'Tegucigalpa', 26.80, 'En Ruta'), -- Este supera el límite de 25T
('EMB-003', 'San Pedro Sula', 14.20, 'Pendiente');