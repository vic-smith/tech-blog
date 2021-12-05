const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'swansron',
    email: 'ronsemail@email.com',
    password: 'password123'
  },
  {
    username: 'spicewater',
    email: 'hotcurry@email.com',
    password: 'password123'
  },
  {
    username: 'runningblind',
    email: 'choppedsalad@email.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
