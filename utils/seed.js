const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
    randomUsername,
    randomThought,
    randomReaction,
    } = require('./data');

connection.on('error', (err) => err);

connection.once( 'open', async () => {
  console.log('Database connected!');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const userAmount = 10;
    const thoughtAmount = 1;
    const users = [];
    const thoughts = [];

    for (let i = 0; i < userAmount; i++) {
      const username = randomUsername();
      const user = await User.create({ username });
      users.push(user);

      for (let j = 0; j < thoughtAmount; j++) {
        const thoughtText = randomThought();
        const thought = await Thought.create({ thoughtText, username });
        thoughts.push(thought);

        for (let k = 0; k < 1; k++) {
          const reactionText = randomReaction();
          const reaction = new Reaction({ reactionBody: reactionText, username });
          thought.reactions.push(reaction);
          await thought.save();
        }
      }
    }

    console.table(users);
    console.table(thoughts);
    console.table(reactions);
    console.log('seeding complete 🌱');
    process.exit(0);
  
  });

