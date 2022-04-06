module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LinkImgs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      link: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      animal_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Animals',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LinkImgs');
  },
};
