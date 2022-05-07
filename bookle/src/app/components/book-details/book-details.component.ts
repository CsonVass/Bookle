import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models/Author';
import { Book } from 'src/app/models/Book';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnChanges {
  
  @Input() book: Book | undefined;

  author?: Observable<Author>

  /**
   * Flags for rendering
   */
  fullScreenCover: boolean = false;
  bookDetalisLoading: boolean = false;
  hasWebsite: boolean = false;
  hasWikipedia: boolean = false;

  /**
   * Constructor method with AuthorService dependency injection
   * @param authorService 
   */
  constructor(private authorService: AuthorsService) { }


  ngOnInit(): void {
    this.getAuthor();
  }

  /**
   * Implementing onChanges method for updating the author when book selection changes
   * @param ngOnChanges 
   */
  ngOnChanges(ngOnChanges: SimpleChanges): void {    
    this.getAuthor();
  }

  /**
   * Sets author with calling authorService and handles the flags for rendering
   */
  getAuthor(): void{
    if(this.book?.authorKey){
      this.bookDetalisLoading = true;
      this.author = this.authorService.getAuthor(this.book?.authorKey);
      this.author.subscribe(r => {
        this.bookDetalisLoading = false;
        this.hasWikipedia = !(!r.wikipedia)
        this.hasWebsite = !(!r.website)
      })
    }
      
  }

}
