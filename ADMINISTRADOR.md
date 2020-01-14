# Utilidad de Administración
Se encuentra instalado el paquete NestJS Admin ( "nestjs-admin": "^0.3.0").
Este permite adminitrar los datos de las tablas definidas. Es accesible a traves de http://localhost:3000/admin
El usuario por defecto creado es admin@admin.es / 1234.

##Creación de tabla
Si no se encuentra creada la tabla, se puede crear a mano o seguir las instrucciones de https://nestjs-admin.com/

####SQL　
Para crearla a mano, ejecutar este script SQL sobre la BBDD
Se encuentra instalado el paquete NestJS Admin.

Este permite adminitrar los datos de las tablas definidas. Es accesible a traves de http://localhost:3000/admin
El usuario por defecto creado es admin@admin.es / 1234.

Como ayuda se puede crear la tabla de administracion con el siguiente SQL

```javascript
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adminuser`
--

CREATE TABLE `adminuser` (
  `id` varchar(36) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `adminuser`
--

INSERT INTO `adminuser` (`id`, `email`, `password`) VALUES
('3d333bd7-b7cc-49e3-b414-c00fe24be675', 'admin2@admin.es', '$2a$12$SAABItjaPlhcCcRB1KZ1uOGZJfYmJv9iA2YoA26JLozMj29rMj4l2'),
('80219b71-e887-473e-a4cc-59f91fa0fea0', 'admin@admin.es', '$2a$12$SaxhOT9rRQInQ49jxDMkT.JcbKZJKmmGuO55VL/v0eY0Un.G9Hi0q');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `adminuser`
--
ALTER TABLE `adminuser`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_2e3121110dc3cfc2df69939ee0` (`email`);
COMMIT;
```
