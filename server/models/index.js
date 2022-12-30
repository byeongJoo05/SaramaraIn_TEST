const Sequelize = require('sequelize');

// 모델 가져오기
const Users = require('./Users');
const Posts = require('./posts');
const Tokens = require('./Tokens');

const env =  process.env.NODE_ENV||'development';

const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username,config.password, config);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = Users;
db.Posts = Posts;
db.Tokens = Tokens;

Users.init(sequelize);
Posts.init(sequelize);
Tokens.init(sequelize);

Users.associate(db);
Posts.associate(db);
Tokens.associate(db);

module.exports = db;