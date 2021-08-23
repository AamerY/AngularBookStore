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
export class BookItemComponent implements OnDestroy {
  showdetails: boolean = false;
  title = 'ModalPopupComponent';

  closeResult: any;
  closeModal: string = '';

  @Input() book: Book = { title: '', price: '', stock: false };
  @Output() onDeleteBook: EventEmitter<Book> = new EventEmitter();
  @Output() onToggleStock: EventEmitter<Book> = new EventEmitter();

  subscription: Subscription;

  constructor(
    private bookService: BookService,
    private modalService: NgbModal
  ) {
    this.subscription = this.bookService
      .onToggle()
      .subscribe((value: any) => (this.showdetails = value));
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onDelete(book: Book) {
   
      this.onDeleteBook.emit(book);
    }
  

  onEdit(book: Book) {}

  onToggle(book: Book) {
    this.onToggleStock.emit(book);
  }

  onBookToggle(book: Book) {
    // this.bookService.toggleBook();
    this.showdetails = !this.showdetails;
  }

  open(content: any) {
    this.modalService.open(ModalPopupComponent).result.then(
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

  // open() {
  //   const modalRef = this.modalService.open(ModalPopupComponent);
  //   modalRef.componentInstance.my_modal_title = 'I your title';
  //   modalRef.componentInstance.my_modal_content = 'I am your content';
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  // open(content: any) {
  //   this.modalService
  //     .open(content, { ariaLabelledBy: 'modal-basic-title' })
  //     .result.then(
  //       (result) => {
  //         this.closeResult = `Closed with: ${result}`;
  //       },
  //       (reason) => {
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //       }
  //     );
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  // triggerModal(content: any) {
  //   this.modalService
  //     .open(content, { ariaLabelledBy: 'modal-basic-title' })
  //     .result.then(
  //       (res) => {
  //         this.closeModal = `Closed with: ${res}`;
  //       },
  //       (res) => {
  //         this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
  //       }
  //     );
  // }
}  
  

