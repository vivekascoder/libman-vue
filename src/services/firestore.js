import 'firebase/firestore'
import {db} from '@/main.js'



function createNewBook(name, author, price) {
  var newBook = db.collection("books").doc()
  return newBook.set({
    name: name,
    author: author,
    price: parseInt(price)
  })
}

function fetchAllBooks() {
  return db.collection('books').get()
}

export {
  createNewBook,
  fetchAllBooks,
  db
}