import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Book } from '../../Book';
import { Subscription } from 'rxjs';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnDestroy {
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();
  title: string = '';
  price: string = '';
  stock: boolean = true;
  description: string = '';
  showForm: boolean = true;
  subscription: Subscription;

  constructor(private formService: FormService) {
    this.subscription = this.formService
      .onToggle()
      .subscribe((value: any) => (this.showForm = value));
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (!this.title) {
      alert('Please add a book title!');
      return;
    }

    const newBook = {
      title: this.title,
      price: this.price,
      stock: this.stock,
      description: this.description,
    };

    this.onAddBook.emit(newBook);

    this.title = '';
    this.price = '';
    this.stock = true;
    this.description = '';
  }
}
