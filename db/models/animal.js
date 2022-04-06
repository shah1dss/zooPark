const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({LinkImg}) {
      Animal.hasMany(LinkImg, {foreignKey: 'animal_id'})
    }
  }
  Animal.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};
