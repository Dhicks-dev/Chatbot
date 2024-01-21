const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

class ChatHistory extends Model {}

ChatHistory.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true
    },
    response: {
      type: DataTypes.STRING,
      allowNull: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW

    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'ChatHistory',
  }
  
  
  
  
  
  );

module.exports = ChatHistory;
