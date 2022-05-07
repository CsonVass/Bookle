import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/Book';

import { faArrowLeft, faArrowRight, faSync } from '@fortawesome/free-solid-svg-icons';
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
  faSync = faSync;

  @Input() searchParameters: SearchParameters | null = null;
  @Output() loadingDone = new EventEmitter();
  @Output() bookSelected = new EventEmitter(); 

  resultsLoading: boolean = false;
  firstInit: boolean = true;
 
  constructor(private booksService: BooksService) { }


  ngOnInit(): void {
    this.getBooks();
    this.firstInit = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getBooks();
  }

  getBooks(): void {
    if(this.firstInit) return
    this.resultsLoading = true;
    this.searchLimit = (this.searchParameters?.limit ? 
      this.searchParameters.limit : 5);

    if(this.searchParameters){
       this.searchParameters.offset = this.currentPage * this.searchLimit;
       this.searchParameters.limit = this.searchLimit;
      }
      
    this.books = this.booksService.getBooks(this.searchParameters);
    this.books.subscribe(res => {
      this.maxPages = Math.ceil(res.numFound / this.searchLimit );
      this.loadingDone.emit();   
      this.resultsLoading = false;        
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

