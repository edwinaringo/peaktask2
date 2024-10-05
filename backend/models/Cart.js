const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Cart = sequelize.define('Cart', {

}, {
  timestamps: true,
});


Cart.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(Cart, { foreignKey: 'userId' });

module.exports = Cart;
