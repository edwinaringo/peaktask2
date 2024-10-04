const { Sequelize } = require('sequelize');

// setting up the database
const sequelize = new Sequelize('peak', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
