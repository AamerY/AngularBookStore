import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../Book';
import { Subscription } from 'rxjs';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  showdetails: boolean = false;
  @Input() book: Book = { title: '', price: '', stock: false };
  @Output() onDeleteBook: EventEmitter<Book> = new EventEmitter();
  @Output() onToggleStock: EventEmitter<Book> = new EventEmitter();

  subscription: Subscription;

  constructor(private bookService: BookService) {
    this.subscription = this.bookService
      .onToggle()
      .subscribe((value: any) => (this.showdetails = value));
  }

  onDelete(book: Book) {
    if (confirm('Are you sure to delete this item ')) {
      console.log(this.onDeleteBook.emit(book));
    }
  }

  onEdit(book: Book) {}

  onToggle(book: Book) {
    this.onToggleStock.emit(book);
    
  }

  onBookToggle(book: Book) {
    
    this.bookService.toggleBook();
  }
}
