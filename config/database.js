
// db.js


const Sequelize  = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file


// Create a private variable to hold the Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306  
  }
  );




try {
  sequelize.authenticate();
 console.log('Connection has been established successfully.');
} catch (error) {
 console.error('Unable to connect to the database:', error);
}


module.exports = sequelize;