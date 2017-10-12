// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var authors_list = [
  {
    name: "Harper Lee",
    alive: false
  },
  {
    name: "F Scott Fitzgerald",
    alive: false
  },
  {
    name: "Victor Hugo",
    alive: false
  },
  {
    name: "Jules Verne",
    alive: false
  },
  {
    name: "Sheryl Sandberg",
    alive: true
  },
  {
    name: "Tim Ferriss",
    alive: true
  },
  {
    name: "John Steinbeck",
    alive: false
  },
  {
    name: "William Shakespeare",
    alive: false
  }
];

// remove all records that match {} -- which means remove ALL records
db.Author.remove({}, function(err, authors) {
  console.log('removed all authors');
  db.Author.create(authors_list, function(err, authors){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all authors');
    console.log("created", authors.length, "authors");


    db.Book.remove({}, function(err, books){
      console.log('removed all books');
      books_list.forEach(function (bookData) {
        var book = new db.Book({
          title: bookData.title,
          image: bookData.image,
          releaseDate: bookData.releaseDate
        });
        db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
          console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
          if (err) {
            console.log(err);
            return;
          }
          book.author = foundAuthor;
          book.save(function(err, savedBook){
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
          });
        });
      });
    });

  });
});
