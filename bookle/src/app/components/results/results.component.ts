import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/Book';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SearchParameters, SearcResults } from 'src/app/models/SearchParameters';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  @Input() searchParameters: SearchParameters | null = null;
  @Output() bookSelected = new EventEmitter();  
 
  constructor(private booksService: BooksService) { }


  ngOnInit(): void {
    this.getBooks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getBooks();
  }

  getBooks(): void {
    this.searchLimit = (this.searchParameters?.limit ? 
      this.searchParameters.limit : 5);

    if(this.searchParameters){
       this.searchParameters.offset = this.currentPage * this.searchLimit;
       this.searchParameters.limit = this.searchLimit;
      }
    let result = this.booksService.getBooks(this.searchParameters);
    this.books = result;
    this.books.subscribe(res => {
      this.maxPages = Math.ceil(res.numFound / this.searchLimit );      
      
    })
   };

  books: Observable<SearcResults> | undefined;
  searchLimit: number = 5;

  currentPage: number = 0; 
  maxPages: number = 0;
  selectedBook: Book | undefined;

  onBookSelected(book: Book){
    this.selectedBook = book;
    this.bookSelected.emit(this.selectedBook);
  }
  

}

