import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpService: HttpService) {}

  getAllBeers() {
    return this.httpService.fetchDataFromUrl()
      .then(response => response.data);
  }
}
