'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notes.init({
    title: {
      type: String,
      allowNull: false
    },
    description: {
      type: String,
      allowNull: false,
    },

    tag: {
      type: String,
      default: 'General'
    },
    date: {
      type: Date,
      default: Date.now
    },
  }, {
    sequelize,
    modelName: 'Notes',
  });
  return Notes;
};