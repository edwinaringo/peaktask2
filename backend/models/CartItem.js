const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Cart = require('./Cart');
const Product = require('./Product');

const CartItem = sequelize.define('CartItem', {
  quantity: { 
    type: DataTypes.INTEGER, 
    defaultValue: 1, 
    allowNull: false 
  },
}, {
  timestamps: true,
});


CartItem.belongsTo(Cart, { foreignKey: 'cartId' });
Cart.hasMany(CartItem, { foreignKey: 'cartId' });

CartItem.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(CartItem, { foreignKey: 'productId' });

module.exports = CartItem;
