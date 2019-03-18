const Lorem = require('../lib/models/Lorem');
const chance = require('chance').Chance();

function seedData(count = 100) {
  const loremToCreate = [...Array(count)].map(() => ({
    text: chance.sentence()
  }));

  return Lorem.create(loremToCreate);
}

module.exports = seedData;
