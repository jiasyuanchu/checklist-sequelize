'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.User)
  };
  return Item;
};