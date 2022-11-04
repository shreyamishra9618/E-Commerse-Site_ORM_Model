const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // defined columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primayKey: true,
      autoIncrement: true,
    },
    tag_name:{
      type: DataTypes.String
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
