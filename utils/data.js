const usernames = [
    'lovelifedotcom',
    'friendlyuser',
    'myusername',
    'thotsandops',
    'tessa123',
    'shirleytemple',
    'janeandjohn',
    'funinthesun',
    'watermeloncrush',
    'icecreamandcake',
];

const thoughts = [
    'Oh look, another glorious morning. It makes me sick!',
    'My momma always said life was like a box of chocolates. You never know what you\'re gonna get.',
    'I love the smell of napalm in the morning.',
    'I feel the need - the need for speed!',
    'That\'s the way the cookie crumbles!',
]

const reactions = [
   'Peachy Keen, Jelly Bean!',
   'There\'s no crying in baseball!',
   'That\'s actually hilarious.',
   'You\'re killin\' me, Smalls!',
   'As if!',
];

const randomUsernameIndex = Math.floor(Math.random() * usernames.length);
const randomThoughtIndex = Math.floor(Math.random() * thoughts.length);
const randomReactionIndex = Math.floor(Math.random() * reactions.length);

const randomUsername = usernames[randomUsernameIndex];
const randomThought = thoughts[randomThoughtIndex];
const randomReaction = reactions[randomReactionIndex];

console.log(randomUsername);
console.log(randomThought);
console.log(randomReaction);
// return a user with a thought and reactions - users have friends...
module.exports = { randomUsername, randomThought, randomReaction };