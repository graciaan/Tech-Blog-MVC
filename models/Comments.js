const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    blogpost_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blogpost',
        key: 'id',
      },
    },    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  },
);

module.exports = Comments;