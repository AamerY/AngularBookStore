import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { Book } from '../Book';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BookService {
  //tested with json server
  private apiUrl = 'http://localhost:3000/books';
  private showDetails: boolean = false;
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  deleteBook(book: Book): Observable<Book> {
    const url = `${this.apiUrl}/${book.id}`;
    return this.http.delete<Book>(url);
  }

  updateBookStock(book: Book): Observable<Book> {
    const url = `${this.apiUrl}/${book.id}`;
    return this.http.put<Book>(url, book, httpOptions);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book, httpOptions);
  }

  toggleBook(): void {
    this.showDetails = !this.showDetails;
    //pass new value of showForm
    this.subject.next(this.showDetails);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
