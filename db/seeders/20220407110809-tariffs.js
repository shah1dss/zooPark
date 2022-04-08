module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Tariffs', [
      {
        name: 'Тариф выходного дня для взрослых',
        description: `Отдохните от рабочей суеты в нашем зоопарке! Цена намного ниже чем на выходных! 
       (Можно с детьми)`,
        price: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тариф выходного дня для детей',
        description: 'Возьмите своих детей с собой в наш замечательный зоопарк! Им точно понравится!',
        price: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Tariffs', null, {});
  },
};
