import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { FormService } from '../../services/form.service';
import { Subscription } from 'rxjs';
import { Book } from '../../Book';
import { ModalPopupShowComponent } from '../../modal-popup-show/modal-popup-show.component';
import { BookService } from '../../services/book.service';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnDestroy {
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter<Book>();
  showForm: boolean = true;
  submitted: boolean = false;
  subscription: Subscription;

  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    stock: new FormControl(true, Validators.required),
  });
  constructor(
    private formService: FormService,
    private modalService: NgbModal
  ) {
    this.subscription = this.formService
      .onToggle()
      .subscribe((value: any) => (this.showForm = value));
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.submitted = true;

    if (this.bookForm.invalid) {
      const modalRef = this.modalService.open(ModalPopupShowComponent);
      modalRef.componentInstance.my_modal_title = 'Input Invalid!';
      modalRef.componentInstance.my_modal_content =
        'Please add a book title and price!';
      return;
    }

    const newBook = {
      title: this.bookForm.controls['title'].value,
      price: this.bookForm.controls['price'].value,
      stock: this.bookForm.controls['stock'].value,
    };

    this.onAddBook.emit(newBook);
    this.bookForm.setValue({ title: '', price: '', stock: true });
    this.submitted = false;
  }

  updateProfile() {}
}
