import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Author } from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {


  private apiUrl = "https://openlibrary.org/authors/";

  /**
   * Constructor with HttpClient dependency injection
   * @param http 
   */
  constructor(private http:HttpClient) { }

  /**
   * Generates the query for the API and returns data converted to the model of the application
   * @param authorId 
   * @returns 
   */
  getAuthor(authorId: String): Observable<Author>{
    let url: string = this.apiUrl + authorId + ".json";  
    return this.http.get(url).pipe(map((res : any) => {
      let author = new Author(res);
      return author;
    }));
  }
  
}
