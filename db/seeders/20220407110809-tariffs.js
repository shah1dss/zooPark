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
        name: 'weekdayAdult',
        description: `Отдохните от рабочей суеты в нашем зоопарке! Цена намного ниже чем на выходных! 
       (Можно с детьми)`,
        price: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'weekdayChild',
        description: 'Возьмите своих детей с собой в наш замечательный зоопарк! Им точно понравится!',
        price: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'weekendAdult',
        description: `В выходные у нас еще круче, чем по будням! Множество развлечений с любыми видами животных! 
        (Включая завхоза)`,
        price: 1500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'weekendChild',
        description: `Дети по выходным тоже не соскучатся! Пока родители развлекаются со страусами, дети могут потусить в зажигательной компании рыбок и пригубить детского шампанского!
        (Все включено)`,
        price: 1300,
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
