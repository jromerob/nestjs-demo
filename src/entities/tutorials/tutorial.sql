-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-01-2020 a las 09:57:02
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.1.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nest-tutorial`
--

CREATE TABLE `tutorial` (
    `id` int(11) NOT NULL,
    `name` varchar(100) NOT NULL,
    `author` varchar(100) NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `nest-tutorial`
--

INSERT INTO `tutorial` (`name`, `author`, `id`) VALUES
('Maquetación con Flexbox', 'César Alberca', 1),
('Primeros pasos con Jupyter Notebook', 'Gwydion Martín', 3),
('Introducción a NestJS', 'Rubén Aguilera', 4),
('Primeros pasos con Serenity y Cucumber', 'Santiago Toledano', 5),
('Registro dinámico de beans en el contexto de Spring', 'José Manuel Sánchez', 6);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `nest-tutorial`
--
ALTER TABLE `tutorial`
  ADD PRIMARY KEY (`id`);
  

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `nest-tutorial`
--
ALTER TABLE `tutorial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
