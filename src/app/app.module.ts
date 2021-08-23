import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { FormComponent } from './components/form/form.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { ModalPopupShowComponent } from './modal-popup-show/modal-popup-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    BooksListComponent,
    BookItemComponent,
    FormComponent,
    BookDetailComponent,
    ReactiveFormComponent,
    ModalPopupComponent,
    ModalPopupShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
