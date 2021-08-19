import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  @Input() book: Book = { title: '', price: '', stock: false };
  @Output() onDeleteBook: EventEmitter<Book> = new EventEmitter();
  @Output() onToggleStock: EventEmitter<Book> = new EventEmitter();

  constructor() {}

  onDelete(book: Book) {
    this.onDeleteBook.emit(book);
  }

  onToggle(book: Book) {
    this.onToggleStock.emit(book);
  }
}
