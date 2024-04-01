// MJS 3.31.24. From mp18-28 course-student-assignment => user-thought-reaction
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }


  // Create empty array to hold the thoughts
  const thoughts = [];

  // Loop x times -- add thoughts to the thoughts array
  for (let i = 0; i < 3; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const reactions = getRandomReactions(3);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    thoughts.push({
      first,
      last,
      github,
      reactions,
    });
  }

  // Add thoughts to the collection and await the results
  const thoughtData = await Thought.insertMany(thoughts);

  // Add users to the collection and await the results
  // insertOne -> create per class and my code.
  await User.create({
    userName: 'MJS',
    inPerson: false,
    thoughts: [...thoughtData.map(({_id}) => _id)],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Seeding User->Thought complete! 🌱');
  process.exit(0);
});
