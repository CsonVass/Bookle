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

  onSearchClick(searchValues: any){
    this.searchParameters = {...searchValues};
  }

  onBookSelected(selectedBook: Book){
    this.selectedBook = selectedBook;
  }

}
