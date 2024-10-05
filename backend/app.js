const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const routes = require('./routes'); 

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', routes);


sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced');
    app.listen(5002, () => console.log('Server running on port 5002'));
  })
  .catch(err => console.log('Error syncing database:', err));
