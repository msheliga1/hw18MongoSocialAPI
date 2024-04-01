// MJS 3.31.24. From mp18-28 course-student-assignment => user-thought-reaction
const connection = require('../config/connection');
const { User, Thought, Student } = require('../models');
const { getRandomName, getRandomAssignments, getRandomReactions } = require('./data');

connection.on('error', (err) => err);
console.log("Very Top Seed2 Student is ", Student); 
console.log("Thought is ", Thought); 
console.log("User is ", User); 

connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      console.log("Dropping old users ... "); 
      await connection.dropCollection('users');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      console.log("Dropping old thoughts ... "); 
      await connection.dropCollection('thoughts');
    }

  // Create empty array to hold the thoughts
  const thoughts = [];
  const thoughts2 = [];

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

  // console.log("Thoughts are ", thoughts); 
  // Add thoughts to the collection and await the results. insertMany is mongoose method
  const thoughtData = await Thought.insertMany(thoughts);

  // Add users to the collection and await the results
  // insertOne -> create per class and my code.
  const users = await User.create({
    userName: 'MJS',
    email: 'm@m.com',
    thoughts: [...thoughtData.map(({_id}) => _id)],
  });

  // Log out the seed data to indicate what should appear in the database
  console.log(JSON.stringify(users)); // Without JSON.stringify - Unreadable.  Likely non-json
  console.table(thoughts);
  console.info('Seeding User->Thought-Reaction data complete! 🌱');
  process.exit(0);
}); // end connection.once
