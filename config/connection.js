const { connect, connection } = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/friend_db';
connect(connectionString)

// const connectionString =
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/friend_db';

//   console.log('connectionString', connectionString);

//   try {
//     mongoose.connect(connectionString);
//   } catch (error) {
//     console.log('error', error);
//     };

module.exports = connection;