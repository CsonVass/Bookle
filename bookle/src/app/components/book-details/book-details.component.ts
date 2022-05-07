import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models/Author';
import { Book } from 'src/app/models/Book';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book | undefined;

  fullScreenCover: boolean = false;
  bookDetalisLoading: boolean = false;
  hasWebsite: boolean = false;
  hasWikipedia: boolean = false;
  author?: Observable<Author>

  constructor(private authorService: AuthorsService) { }

  ngOnInit(): void {
    this.getAuthor();
  }

  ngOnChanges(ngOnChanges: SimpleChanges): void {    
    this.getAuthor();
  }

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
