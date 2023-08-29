const sequelize = require('../config/connection');
const { seedPosts } = require('./postData');
const { seedUsers } = require('./usersData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  process.exit(0);
};

seedAll();
