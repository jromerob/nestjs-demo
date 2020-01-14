const adminuser = require('nestjs-admin').AdminUserEntity

module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "test",
    "entities": [
        "dist/**/**.entity{.ts,.js}", adminuser
    ],
    "synchronize": true
}