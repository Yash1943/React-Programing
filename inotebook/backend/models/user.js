'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: String,
      allowNull: false
    },
    email: {
      type: String,
      allowNull: false,
      unique: true
    },

    password: {
      type: String,
      allowNull: false
    },
    date: {
      type: Date,
      default: Date.now
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};