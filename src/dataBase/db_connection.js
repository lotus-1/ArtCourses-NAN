const { Pool } = require('pg');

const url = require('url');
require('dotenv').config();

let DATABASE_DB_URL;

if (!process.env.DATABASE_URL) {
  DATABASE_DB_URL = process.env.DB_URL;
} else {
  DATABASE_DB_URL = process.env.DATABASE_URL;
}

if (!DATABASE_DB_URL) throw new Error("Enviroment variable DATABASE_DB_URL must be set");

const params = url.parse(DATABASE_DB_URL);
const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 10,
  user: username,
  password: password
};

options.ssl = options.host !== 'localhost';

module.exports = new Pool(options);
