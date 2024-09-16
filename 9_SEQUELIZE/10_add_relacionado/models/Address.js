const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = require('../models/User');

const Address = db.define('Address', {
  street: {
    type: DataTypes.STRING,
    required: true,
  },
  number: {
    type: DataTypes.STRING,
    required: true,
  },
  city: {
    type: DataTypes.STRING,
    required: true,
  },
});

Address.belongsTo(User);

module.exports = Address;