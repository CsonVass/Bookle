import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { SearchParameters } from 'src/app/models/SearchParameters';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  searchParameters: SearchParameters;
  selectedBook: Book | undefined;

  /**
   * Flag for rendering
   */
  loading: boolean = false;

  /**
   * Initializing searchParameters
   */
  constructor() { 
    this.searchParameters = {
      title: null,
      author: null,
      subject: null,
      language:  {id: "any", name: "Any"},
      limit: null,
      offset: 0
    }
  }

  ngOnInit(): void {
  } 

  /**
   * Sets the searchValues and loading flag to true when search in child element is fired
   * @param searchValues 
   */
  onSearchClick(searchValues: any){
    this.searchParameters = {...searchValues};
    this.loading = true;
  }
/**
 * Sets the selectedBook when a book in child element is selected
 * @param selectedBook 
 */
  onBookSelected(selectedBook: Book){
    this.selectedBook = selectedBook;
  }
/**
 * Sets the loading flag to false when child element is done
 */
  onLoadingDone(){
    this.loading = false;
  }

}
