const connection = require('../config/connection');
const { User, Thought } = require('../models');
const user = require('../models/User');
const {
  usernames,
  thoughts: seedThoughts,
  reactions,
} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Database connected!');

  await User.deleteMany({});
  await Thought.deleteMany({});

  const userAmount = 10;
  const users = [];
  const thoughts = [];

  for (let i = 0; i < userAmount; i++) {
    const username = usernames[i];
    const emailPrefix = username.toLowerCase().replace(/\s/g, '') + Math.floor(Math.random() * 1000);
    const email = `${emailPrefix}@example.com`;
    const user = await User.create({ username, email });
    users.push(user);

  const thoughtText = seedThoughts[Math.floor(Math.random() * seedThoughts.length)];
  const thought = await Thought.create({ thoughtText, username });
  thoughts.push(thought);

  const reactionText = reactions[Math.floor(Math.random() * reactions.length)];
  const reaction = { reactionBody: reactionText, username };
  thought.reactions.push(reaction);
  await thought.save();
  }


  user.thoughts.push(thought);
  user.reactions.push(reaction);
  await user.save();

console.table(users);
console.table(thoughts);
console.table(reactions);

console.log('seeding complete 🌱');

process.exit(0);
});

