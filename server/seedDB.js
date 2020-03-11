const mongoose = require('mongoose');
const Room = require('./rooms');
const faker = require('faker');


const rooms = []

for(let i = 0; i < 100; i++) {

  //Create random reviews. array of review object
  let reviews = [];
  for(let i = 0; i < faker.random.number({max: 30}); i++) {
    reviews.push({
      text: faker.lorem.words(),
      userImg: faker.image.imageUrl(),
      createAt: faker.date.past()
    })
  }

  rooms.push({
    per_night: faker.finance.amount(),
    reviews
  })
}

Room.insertMany(rooms, err => {
  if(err) console.log(err);

  console.log('Successfully insert data...');
  mongoose.connection.close();
})

