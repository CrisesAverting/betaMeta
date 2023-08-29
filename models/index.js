const Users = require('./Users');
const Post = require('./Post');

Users.hasMany(Post);

Post.belongsTo(Users, {
  foreignKey: 'user_id',
});

module.exports = { Users, Post };