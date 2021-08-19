import { Component, OnInit } from '@angular/core';
import { BOOKS } from 'src/app/mock-books';

import { Book } from '../../Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books_list: Book[] = BOOKS;

  constructor() {}

  ngOnInit(): void {}

  deleteBook(book: Book) {}

  toggleStock(book: Book) {
    book.stock = !book.stock;
  }

  addBook(book: Book) {}
}
