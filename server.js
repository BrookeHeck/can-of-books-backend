'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/books.js');
const { response } = require('express');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Mongoose is connected');
});
mongoose.connect(process.env.DB_URL);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.status(200).send('Hello from our awesome server');
});

app.get('/books', getAllBooks);

async function getAllBooks(request, response) {
  try {
    let allBooks = await Book.find();
    response.status(200).send(allBooks);
  } catch(error) {
    next(error);
  }
}

app.post('/books', createBook);

async function createBook(request, response) {
  try {
    let newBook = await Book.create(request.body);
    response.status(200).send(newBook);
  } catch(error) {
    response.status(500).send('Error creating book');
  }
}

app.delete('/books/:id', async (request, response) => {
  try {
    await Book.findByIdAndDelete(request.params.id);
    response.status(200).send('Success');
  } catch(error) {
    console.log(error);
    response.status(500).send(`Cannot delete book with id: ${request.params.id}`);
  }
});

app.put('/books/:id', updateBook);

async function updateBook(request, response, next) {
  try {
    let updatedBook = await Book.findByIdAndUpdate(request.params.id, request.body, {new: true, overwrite: true});
    response.status(200).send(updatedBook);
  } catch (error) {
    next(error);
  }
}

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
