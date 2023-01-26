const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Alice 1',
        email: 'Alice1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 9),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Alice 2',
        email: 'Alice2@gmail.com',
        password_hash: await bcryptjs.hash('123456', 9),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Alice 3',
        email: 'Alice3@gmail.com',
        password_hash: await bcryptjs.hash('123456', 9),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Alice 4',
        email: 'Alice4@gmail.com',
        password_hash: await bcryptjs.hash('123456', 9),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
