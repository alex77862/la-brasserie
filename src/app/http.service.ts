// http.service.ts

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://api.punkapi.com/v2/beers';

  constructor() { }

  fetchDataFromUrl() {
    return axios.get(this.apiUrl);
  }

  getBeerById(beerId: number) {
  const apiUrl = `${this.apiUrl}/${beerId}`;
  return axios.get(apiUrl);
}

}
