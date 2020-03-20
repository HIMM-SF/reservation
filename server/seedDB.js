const mongoose = require('mongoose');
const Room = require('./rooms');
const faker = require('faker');

module.exports = () => {
  const rooms = []
  for(let i = 0; i < 100; i++) {

    //Create random reviews. array of review object
    let reviews = [];
    for(let i = 0; i < faker.random.number({max: 30}); i++) {
      reviews.push({
        text: faker.lorem.words(),
        userImg: faker.image.imageUrl(),
        createAt: faker.date.past()
      });
    };

    let months = [
      'January', 
      'February', 
      'March', 
      'April', 
      'May', 
      'June', 
      'July', 
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    let booked_dates = {}

    const currentMonth = new Date();

    for(let i = 0; i < 12; i++) {
      booked_dates[months[i]] = [];
      
      if(currentMonth.getMonth() > i) {
        continue;
      }

      for(let j = 1; j < faker.random.number({max: 25}); j++) {

        let day = faker.random.number({min: 1, max: 31})
        if(!booked_dates[months[i]].includes(day)) {
          booked_dates[months[i]].push(day);
        }
      };

      booked_dates[months[i]].sort((a, b) => a - b);
    };

    rooms.push({
      per_night: faker.finance.amount(),
      booked_dates,
      reviews
    })
  }

  Room.insertMany(rooms, err => {
    if(err) console.log(err);

    console.log('Successfully inserted data to DB...');
    mongoose.connection.close();
  })
}