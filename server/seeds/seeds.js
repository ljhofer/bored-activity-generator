const db = require('../config/connection');
const { Activity, User, Comment } = require('../models');

const activityData = require('./activityData.json');
const userData = require('./userData.json');
const commentData = require('./commentData.json');

db.once('open', async () => {
  await Activity.deleteMany({});

  const activities = await Activity.insertMany(activityData);

  console.log('Activities seeded!');
  // process.exit(0);
});

db.once('open', async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);

  console.log('Users seeded!');
  // process.exit(0);
});

db.once('open', async () => {
  await Comment.deleteMany({});

  const comments = await Comment.insertMany(commentData);

  console.log('Comments seeded!');
  process.exit(0);
});

