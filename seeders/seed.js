const db = require('../config/connection');
const { Product } = require('../models');
const productSeeds = require('./productSeeds.json');

db.once('open', async () => {
  try {
    await Product.deleteMany({});
    await Product.create(productSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  

  console.log('all done!');
  process.exit(0);
});