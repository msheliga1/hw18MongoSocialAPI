const names = [
  'us1',      'us2',      'us3',              'us4',
  'Smith',    'Jones',    'Coollastname',     'Clark',
  'Grace',    'Alex',     'Mark',             'Sarah',  ];

const thoughtTexts = [
  'thought1', 'thought2 blah-blah', 'thought3 blah-blah-blah', 'thought4', 'thought5', ];

const appDescriptions = [
  'Decision Tracker',   'Find My Phone',          'Learn Piano',    'Starbase Defender',
  'Tower Defense',      'Monopoly Money Manager', 'Hello world',    'Stupid Social Media App',
  'Email',              'Firefox',                'Running app',    'Cooking app',  ];

const reactions = [
  'goodx1',   'goodx2', 'goodx3',     'goodx4',
  'average',  'so-so',  'decent',     'typical',
  'badx1',    'badx2',  'badx3',      'badx4',  ];

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
      reactionBody: getRandomArrItem(reactions),  
      username: "MJS",   // hardcode for now
      // score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
}; // end get Random Reactions 

// Function to generate reactions that we can add to thought (social media post) object.
const getReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: reactions[int],
      username: "MJS",   // hardcode for now
    });
  }
  return results;
};

// Function to generate random assignments that we can add to student object.
const getThoughtText = (int) => {
    // getRandomArrItem(appDescriptions),
    const result = thoughtTexts[int];
    return result; 
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomAssignments, getRandomReactions, getReactions, getThoughtText };
