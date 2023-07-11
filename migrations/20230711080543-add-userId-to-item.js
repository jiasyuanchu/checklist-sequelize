'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Items', 'UserId', {
      type: Sequelize.INTEGER,
      allowNull: false, //此為必填欄位
      references: { //參照對象
        model: 'Users',
        key: 'id'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Items', 'UserId')
  }
}