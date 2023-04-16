const connection = require('./config/connection');
const { User, Thought } = require('./models');
const { userSeedData, thoughtSeedData } = require('./data');

connection.on('error', (err) => err);

connection.once( 'open', async () => {
  console.log('Database connected!');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = await User.create(userSeedData);
    const thoughts = await Thought.create(thoughtSeedData);

    const thoughtsByUser = thoughts.map((thought) => {
      const user = users[Math.floor(Math.random() * users.length)];
      thought.username = user.username;
      thought.userId = user._id;
      return thought;
    });
    
    await Thought.insertMany(thoughtsByUser);
    console.log('Database seeded!');
    process.exit(0);
});
