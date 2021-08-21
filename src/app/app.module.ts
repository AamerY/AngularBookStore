import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { FormComponent } from './components/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    BooksListComponent,
    BookItemComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
