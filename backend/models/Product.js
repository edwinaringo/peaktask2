const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Category = require('./Category');

const Product = sequelize.define('Product', {
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  description: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },
  price: { 
    type: DataTypes.FLOAT, 
    allowNull: false 
  },
  image: { 
    type: DataTypes.STRING, 
    validate: { isUrl: true } 
  },
}, {
  timestamps: true,
});


Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

module.exports = Product;
