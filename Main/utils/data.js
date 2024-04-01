const names = [
  'us1',
  'us2',
  'us3',
  'Smith',
  'Jones',
  'Coollastname',
  'Courtney',
  'Clark',
  'Grace',
  'Kelsey',
  'Alex',
  'Mark',
  'Sarah',
  'Parker',
];

const appDescriptions = [
  'Decision Tracker',
  'Find My Phone',
  'Learn Piano',
  'Starbase Defender',
  'Tower Defense',
  'Monopoly Money Manager',
  'Hello world',
  'Stupid Social Media App',
  'Email',
  'Firefox',
  'Running app',
  'Cooking app',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
// Get item given an array and index
const getArrItem = (arr, index) => arr[index];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
const getRandomAssignments = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      assignmentName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Function to generate random reactions that we can add to thought (social media post) object.
const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomAssignments, getRandomReactions };
