import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Book } from '../../Book';
import { Subscription } from 'rxjs';
import { BookService } from '../../services/book.service';
import { ModalPopupComponent } from '../../modal-popup/modal-popup.component';
import { ModalPopupShowComponent } from '../../modal-popup-show/modal-popup-show.component';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  showdetails: boolean = false;
  title = 'ModalPopupComponent';

  closeResult: any;

  @Input() book: Book = { title: '', price: '', stock: false };
  @Output() onDeleteBook: EventEmitter<Book> = new EventEmitter();
  @Output() onToggleStock: EventEmitter<Book> = new EventEmitter();

  constructor(
    private bookService: BookService,
    private modalService: NgbModal
  ) {}

  onDelete(book: Book) {
    this.onDeleteBook.emit(book);
  }

  onEdit(book: Book) {}

  onBookToggle(book: Book) {
    // this.bookService.toggleBook();
    this.showdetails = !this.showdetails;
  }

  open(content: any) {
    const modalRef = this.modalService.open(ModalPopupComponent).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        this.onDelete(this.book);
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
      
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  showPoUpDetails() {
    let isStock = '';
    const modalRef = this.modalService.open(ModalPopupShowComponent);
    modalRef.componentInstance.my_modal_title = this.book.title + ' Details';
    if (this.book.stock) {
      isStock = 'In Stock';
    }
    else{
      isStock='out Stock';
    }
    modalRef.componentInstance.my_modal_content =
      'Price= ' + this.book.price + '$ '+ isStock;
  }
}
