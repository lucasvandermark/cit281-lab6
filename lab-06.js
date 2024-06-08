

class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

// Create a book
// const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018");

class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "",} = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`);
      }
    }
    deleteBook(isbn) {
       /*  if (isbn == ._books.) {
            ._books.filter((book), )
        } */
        this._books = this._books.filter(book => book.isbn !== isbn)
    }
  }


// Create library object
const library = new Library("New York Times Best Seller List");

/* // Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018");
const fahrenheit451 = new Book("Fahrenheit 451", "Ray Bradbury", "10/19/1953");
const ofMiceAndMen = new Book("Of Mice and Men", "John Steinbeck", "2/6/1937");

// Add book to library and output library count and books
library.addBook(atomicHabits);
library.addBook(fahrenheit451);
library.addBook(ofMiceAndMen);
console.log(`Book count: ${library.count}`);
library.listBooks(); */

// Create books
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");
const oceanPrey = new Book("Ocean Prey", "John Sandford", "04/13/2021", "1398505501");

// Add books to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
library.addBook(oceanPrey);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();