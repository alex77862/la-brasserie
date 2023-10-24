// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {
//   title = 'la-brasserie';
// }

// app.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'la-brasserie';
  allBeers: any[] = []; // Propriété pour stocker toutes les bières

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.fetchDataFromUrl().then(response => {
      console.log(response.data);
      // Affectez toutes les bières à la propriété allBeers
      this.allBeers = response.data;
    }).catch(error => {
      console.error(error);
    });
  }
}

