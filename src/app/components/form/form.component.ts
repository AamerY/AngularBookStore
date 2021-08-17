import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();
  title: string="";
  price: string="";
  stock: boolean = true;
  showForm: boolean =true;


  constructor() {
   
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
       
    }

  onSubmit() {
    if (!this.title) {
      alert('Please add a book!');
      return;
    }

    const newBook = {
      title: this.title,
      price: this.price,
      stock: this.stock,
    };

    this.onAddBook.emit(newBook);

    this.title = '';
    this.price = '';
    this.stock = true;
  }
}
