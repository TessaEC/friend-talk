const { connect, connection } = require('mongoose');

const connectionString =
  mongoose.connect(process.env.MONGODB_URI) || 'mongodb://127.0.0.1:27017/friend_db';

connect(connectionString);

module.exports = connection;