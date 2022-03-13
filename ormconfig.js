import dotenv from 'dotenv';

dotenv.config();

export default {
  "type": process.env.DB_TYPE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DBNAME,
  "synchronize": true,
  "logging": false,
  "entities": [
    "entity/*.js"
  ],
  "migrations": [
    "migration/*.js"
  ],
  "subscribers": [
    "subscriber/*.js"
  ]
}