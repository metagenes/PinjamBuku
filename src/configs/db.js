const Sequelize = require('sequelize');

const dbName = process.env.DB_DATABASE; 
const dbUser = process.env.DB_USERNAME; 
const dbPassword = process.env.DB_PASSWORD; 
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

module.exports = new Sequelize(dbName, dbUser, dbPassword, {
	dialect: 'mysql',
	host: dbHost,
	port: dbPort,
	logging: false,
});