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


  books: Observable<SearcResults> | undefined;
  selectedBook: Book | undefined;

  /**
   * Variables for paging
   */
  currentPage: number = 0; 
  maxPages: number = 0;
  searchLimit: number = 5;

  /**
  * Flags for rendering
  */
    resultsLoading: boolean = false;
    firstInit: boolean = true;
 
  /**
   * Constructor with BooksService dependency injection
   * @param booksService 
   */
  constructor(private booksService: BooksService) { }

  /**
   * Calls the getBooks function and sets the firstInit flag on initialization 
   */
  ngOnInit(): void {
    this.getBooks();
    this.firstInit = false;
  }

  /**
   * Calls the getBooks function on changes (e.g new search)
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.getBooks();
  }

  /**
   * Sets the book via calling the API, sets parameters for calls, emits for the parent and handles the paging 
   * @returns 
   */
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


  /**
   * When a book is selected it's assigned to the selectedBook variable 
   * and the bookSelected event is emited wit providing the selected book for the parent element
   * @param book 
   */
  onBookSelected(book: Book){
    this.selectedBook = book;
    this.bookSelected.emit(this.selectedBook);
  }
  

}

