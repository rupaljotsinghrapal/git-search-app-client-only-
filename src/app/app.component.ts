import { Component } from '@angular/core';
import {MainService} from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  reqParam = {
    language: null,
    repo: null
  };
  itemsToDisplay : any;
  language: string;
  owner: string;
  repo: string;
  showResponse: boolean = false;

  constructor(
    readonly main : MainService
  ){  }

  initiateSearch(){
    this.showResponse = false;
    this.reqParam.language = this.language? this.language: null ;
    this.reqParam.repo = this.repo? this.repo: null ;

    this.main.executeSearch(this.reqParam).subscribe((data : any) => {
      this.itemsToDisplay = data.items;
      this.showResponse = true;
    });
  }

}
