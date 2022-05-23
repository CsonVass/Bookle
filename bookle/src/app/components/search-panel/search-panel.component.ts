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

  searchParameters : SearchParameters;

  /** 
   * List of languages for the select input
   */
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

  titleHistory: Array<string> = [];
  authorHistory: Array<string> = [];
  subjectHistory: Array<string> = [];
  languageHistory: Array<string> = [];


  /**
   * Constructor for initializing searchParameters
   */
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
    this.getHistory() 
  }

  /**
   * Emits the searchClick event with providing the searchParameters as parameters for parent element
   */
  onSubmit(){    
    this.searchClick.emit(this.searchParameters);
    this.editHistory()

  }

  editHistory(){
    if(this.searchParameters.title){
      this.titleHistory.unshift(this.searchParameters.title.toString());
      localStorage.setItem("titleHistory", JSON.stringify(this.titleHistory.slice(0, 5)));
    }
    if(this.searchParameters.author){
      this.authorHistory.unshift(this.searchParameters.author.toString());
      localStorage.setItem("authorHistory", JSON.stringify(this.authorHistory.slice(0, 5)));
    }
    if(this.searchParameters.subject){
      this.subjectHistory.unshift(this.searchParameters.subject.toString());
      localStorage.setItem("subjectHistory", JSON.stringify(this.subjectHistory.slice(0, 5)));
    }
    if(this.searchParameters.language.name){
      this.languageHistory.unshift(this.searchParameters.language.name.toString());
      localStorage.setItem("languageHistory", JSON.stringify(this.languageHistory.slice(0, 5)));
    }
  }

  getHistory(){
    var titleHistoryFromLS =localStorage.getItem("titleHistory");
    var authorHistoryFromLS =localStorage.getItem("authorHistory");
    var subjectHistoryFromLS =localStorage.getItem("subjectHistory");
    var languageHistoryFromLS =localStorage.getItem("languageHistory");
   
    if(titleHistoryFromLS) {
      this.titleHistory = JSON.parse(titleHistoryFromLS);
    }
   
    if(authorHistoryFromLS) {
      this.authorHistory = JSON.parse(authorHistoryFromLS);
    }
   
    if(subjectHistoryFromLS) {
      this.subjectHistory = JSON.parse(subjectHistoryFromLS);
    }
   
    if(languageHistoryFromLS) {
      this.languageHistory = JSON.parse(languageHistoryFromLS);
    }
      
  }

  removeHistory(){
    localStorage.removeItem("titleHistory");
    localStorage.removeItem("authorHistory");
    localStorage.removeItem("subjectHistory");
    localStorage.removeItem("languageHistory");
  }


}


