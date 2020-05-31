import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeSearch(criteria){
    let url = 'https://api.github.com/search/repositories?q='+ criteria.repo +'+language:'+ criteria.language +'&sort=stars&order=desc';
    return this.httpClient.get(url);
  }
}
