'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Book = require('./models/books');

async function seed() {
  await Book.create({
    title: 'It Starts with Us',
    description: 'A novel',
    status: 'Available'
  });

  await Book.create({
    title: 'Fairy Tale',
    description: 'A Stephen King book',
    status: 'Available'
  });

  await Book.create({
    title: 'The Final Gambit',
    description: 'An awesome chess book',
    status: 'Not available'
  });
  console.log('Three books created');
  mongoose.disconnect();
}

seed();