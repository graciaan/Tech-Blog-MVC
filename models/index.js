const BlogPost = require('./BlogPost');
const Comments = require('./Comments');
const User = require('./User');

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.hasMany(Comments, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(BlogPost, {
  foreignKey: 'blogpost_id'
});

module.exports = { BlogPost, Comments, User };