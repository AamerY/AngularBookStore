import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  deleteBook(book: Book) {
    this.bookService
      .deleteBook(book)
      .subscribe(
        () => (this.books = this.books.filter((t) => t.id !== book.id))
      );
  }

  toggleStock(book: Book) {
    book.stock = !book.stock;
    this.bookService.updateBook(book).subscribe();
  }

  addBook(book: Book) {
    this.bookService.addBook(book).subscribe((book) => this.books=[...this.books,book]);
  }
}
