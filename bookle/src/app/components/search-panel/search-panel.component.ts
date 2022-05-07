import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Language } from 'src/app/models/Language';
import { SearchParameters } from 'src/app/models/SearchParameters';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  @Output() searchClick = new EventEmitter();
  @Input() loading: boolean = false;
  faSync = faSync;



  languages: Language[] = [  
    {id: "any", name: "Any"},
    {id: "eng", name: "English"},
    {id: "hun", name: "Hungarian"},
    {id: "ita", name: "Italian"},
    {id: "dut", name: "Dutch"},
    {id: "spa", name: "Spanish"},
    {id: "rus", name: "Russian"},
    {id: "ger", name: "German"},
    {id: "jpn", name: "Japanese"},
    {id: "fre", name: "French"},
    {id: "bul", name: "Bulgarian"},
    {id: "slo" , name: "Slovak"},
    {id: "cze", name: "Czech"},
    {id: "swe", name: "Swedish"},
    {id: "pol", name: "Polish"},
    
  ];
  searchParameters : SearchParameters;

  constructor() {    
    this.searchParameters = {
      title: null,
      author: null,
      subject: null,
      language: this.languages[0],
      limit: null,
      offset: 0
    }
  }
  
  ngOnInit(): void {   
  }

  onSubmit(){    
    this.searchClick.emit(this.searchParameters);

  }


}


