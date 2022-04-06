const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LinkImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Animal}) {
      LinkImg.belongsTo(Animal, {foreignKey: 'animal_id'})
    }
  }
  LinkImg.init({
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    animal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Animals',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'LinkImg',
  });
  return LinkImg;
};
