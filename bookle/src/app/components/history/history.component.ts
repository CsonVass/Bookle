import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  type: string = ""
  private sub: any;
  
  history: String[] = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.getHistory();
    })
  }

  getHistory(){
    var historyFromLS =localStorage.getItem(this.type + "History");
   
    if(historyFromLS) {
      this.history = JSON.parse(historyFromLS);
  }else{
    this.history = ["No history"]
  }
}

}
