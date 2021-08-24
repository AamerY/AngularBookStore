import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../Book';
import { ModalPopupShowComponent } from '../../modal-popup-show/modal-popup-show.component';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private modalService: NgbModal
  ) {}

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
    // if (this.books.find(book.title))
     let isStock = '';
    const found = this.books.find((element) => element.title === book.title);
    if (found) {
      const modalRef = this.modalService.open(ModalPopupShowComponent);
      modalRef.componentInstance.my_modal_title =
        book.title + ' already exists in the Store';
      modalRef.componentInstance.my_modal_content =
        'item will not added to the Store';
      return;
    } else {
      this.bookService
        .addBook(book)
        .subscribe((book) => (this.books = [...this.books, book]));

      const modalRef = this.modalService.open(ModalPopupShowComponent);
      modalRef.componentInstance.my_modal_title =
        book.title + ' added successfully';
      if (book.stock) {
        isStock = 'In Stock';
      } else {
        isStock = 'Out Of Stock';
      }
      modalRef.componentInstance.my_modal_content =
        'Price= ' + book.price + '$ ' + isStock ;
         modalRef.componentInstance.my_modal_footer = book.description;
      return;
    }
  }
}
