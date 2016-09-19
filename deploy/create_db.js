var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE ' + dbconfig.database);

// USERS TABLE
connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.users_table + '` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `username` VARCHAR(20) NOT NULL, \
    `password` CHAR(60) NOT NULL, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
    UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
)');

// MATCHES TABLE
connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.matches_table + '` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `team` VARCHAR(50) NOT NULL, \
    `score` VARCHAR(8) NOT NULL, \
    `match_date` VARCHAR(20) NOT NULL, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_MATCHES_UNIQUE` (`id` ASC) \
)');

connection.query("INSERT INTO `" + dbconfig.database + "`.`" + dbconfig.matches_table + "` (id, team, score, match_date) VALUES \
(1, 'Jaguars vs Vikings', '20-1', '2016-08-21 14:00:00'), \
(2, 'Hornets vs Shields', '5-20', '2016-08-21 14:00:00'), \
(3, 'Bobcats vs Stampede', '29-20', '2016-08-21 14:00:00'), \
(4, 'Lightning vs Quakes', '40-10', '2016-08-21 14:00:00') \
");


console.log('Success: Database Created!')

connection.end();
