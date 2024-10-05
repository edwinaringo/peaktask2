const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
  name: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: false 
  },
  description: { 
    type: DataTypes.STRING 
  },
}, {
  timestamps: true,
});

module.exports = Category;
