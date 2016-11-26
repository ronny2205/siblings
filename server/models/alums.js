'use strict';
module.exports = function(sequelize, DataTypes) {
  var Alums = sequelize.define('Alums', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    track: DataTypes.STRING,
    cohort: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Alums;
};