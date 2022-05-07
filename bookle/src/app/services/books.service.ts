import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';
import { map } from 'rxjs/operators';
import { SearchParameters, SearcResults } from '../models/SearchParameters';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  private apiUrl = 'http://openlibrary.org/search.json';

  /**
   * Constructor with HttpClient dependency injection
   * @param http 
   */
  constructor(private http:HttpClient) { }

  /**
   * Generates the query for the API and returns data converted to the model of the application
   * @param searchParameters 
   * @returns 
   */
  getBooks(searchParameters: SearchParameters | null): Observable<SearcResults> {
    let params = new HttpParams();
    if(searchParameters?.title && searchParameters.title != "") params = params.append('title', searchParameters.title.toString())
    if(searchParameters?.subject && searchParameters.subject != "") params = params.append('subject', searchParameters.subject.toString())
    if(searchParameters?.limit) params = params.append('limit', searchParameters.limit.toString())
    if(searchParameters?.author && searchParameters.author != "") params = params.append('author', searchParameters.author.toString())
    if(searchParameters?.language.id && searchParameters.language.id != "any") params = params.append('language', searchParameters.language.id.toString())
    if(searchParameters?.offset) params = params.append('offset', searchParameters.offset.toString())

    return this.http.get(this.apiUrl, {params: params})
      .pipe(map((res : any) => {
        let books = this.createBookList(res.docs);
        return {books: books, numFound: res.numFound};
      }));
    
  }  

  /**
   * Function for converting data into the model's format
   * @param docs 
   * @returns 
   */
  createBookList(docs: any[]): Book[] {
    var books_: Book[] = [];
    docs.forEach(element => {
      books_.push(new Book(element));
    });
    return books_;

  }

}


