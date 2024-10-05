const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Order = sequelize.define('Order', {
  totalAmount: { 
    type: DataTypes.FLOAT, 
    allowNull: false 
  },
  status: { 
    type: DataTypes.STRING, 
    defaultValue: 'Pending' 
  },
}, {
  timestamps: true,
});


Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });

module.exports = Order;
