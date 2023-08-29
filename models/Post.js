const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}
//user model etc
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: NOW
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
  }
);

module.exports = Post;