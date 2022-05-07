import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Author } from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  //https://openlibrary.org/authors/OL26320A.json
  private apiUrl = "https://openlibrary.org/authors/";

  constructor(private http:HttpClient) { }

  getAuthor(authorId: String): Observable<Author>{
    let url: string = this.apiUrl + authorId + ".json";  
    return this.http.get(url).pipe(map((res : any) => {
      let author = new Author(res);
      return author;
    }));
  }
  
}
